import { Bell, Droplet, Music, Zap, Award } from 'lucide-react';
import { SoundCard } from './components/SoundCard';
import { Toaster } from './components/ui/toaster';

function App() {
  const soundData = [
    {
      id: 1,
      title: 'Bell Ding',
      path: '/sounds/bell-ding.mp3',
      color: '#FF6B6B',
      icon: <Bell className="h-5 w-5" />
    },
    {
      id: 2,
      title: 'Bubble Pop',
      path: '/sounds/bubble-pop.mp3',
      color: '#4ECDC4',
      icon: <Droplet className="h-5 w-5" />
    },
    {
      id: 3,
      title: 'Ding',
      path: '/sounds/ding.mp3',
      color: '#FFD166',
      icon: <Music className="h-5 w-5" />
    },
    {
      id: 4,
      title: 'Good Result',
      path: '/sounds/good-result.mp3',
      color: '#6A0572',
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 5,
      title: 'Success Bell',
      path: '/sounds/success-bell.mp3',
      color: '#1A936F',
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4 md:p-8">
      <header className="container mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Sound Picker</h1>
        <p className="text-muted-foreground">Click on a card to play the sound</p>
      </header>
      
      <main className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {soundData.map((sound) => (
            <SoundCard
              key={sound.id}
              title={sound.title}
              soundPath={sound.path}
              color={sound.color}
              icon={sound.icon}
            />
          ))}
        </div>
      </main>
      
      <footer className="container mx-auto mt-12 text-center text-sm text-muted-foreground">
        <p>Sound Picker Tool &copy; {new Date().getFullYear()}</p>
      </footer>
      <Toaster />
    </div>
  );
}

export default App;