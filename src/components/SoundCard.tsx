import { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';

interface SoundCardProps {
  title: string;
  soundPath: string;
  color: string;
  icon: React.ReactNode;
}

export function SoundCard({ title, soundPath, color, icon }: SoundCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isPlaying ? 'ring-2 ring-offset-2' : ''}`} style={{ borderColor: color }}>
      <audio 
        ref={audioRef} 
        src={soundPath} 
        onEnded={handleAudioEnded}
      />
      
      <CardHeader className="p-4 text-white" style={{ backgroundColor: color }}>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 flex justify-center items-center">
        <Button 
          size="lg" 
          variant="outline" 
          className={`rounded-full w-16 h-16 transition-all ${isPlaying ? 'bg-primary text-primary-foreground' : ''}`}
          onClick={togglePlay}
        >
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
        </Button>
      </CardContent>
      
      <CardFooter className="p-4 flex items-center gap-2">
        <Volume2 className="h-4 w-4 text-muted-foreground" />
        <Slider
          value={[volume]}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          className="w-full"
        />
      </CardFooter>
    </Card>
  );
}