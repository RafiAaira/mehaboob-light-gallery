import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import GalleryPage from '@/components/GalleryPage';
import ContactPage from '@/components/ContactPage';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      {renderCurrentSection()}
    </div>
  );
};

export default Index;
