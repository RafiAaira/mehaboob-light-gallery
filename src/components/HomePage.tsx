import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Star, Award } from 'lucide-react';
import mehaboobProfile from '@/assets/mehaboob-profile-1.jpg';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto relative">
              <img
                src={mehaboobProfile}
                alt="Mehaboob - Owner"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-glow"
              />
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Business Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mehaboob Lighting
            </span>
            <br />
            <span className="text-secondary">& Decorations</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Bringing light and life to your most memorable events
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={() => onNavigate('gallery')}
            className="text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            View Our Decor Gallery
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                We use only the finest lighting equipment and decoration materials for your special events.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Creative Designs</h3>
              <p className="text-muted-foreground">
                Each event is unique. We create custom lighting and decoration setups tailored to your vision.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Experienced Team</h3>
              <p className="text-muted-foreground">
                Years of expertise in wedding, reception, and party lighting & decoration services.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;