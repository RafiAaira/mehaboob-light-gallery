import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Filter } from 'lucide-react';
import decor1 from '@/assets/decor-1.jpg';
import lighting2 from '@/assets/lighting-2.jpg';
import stage3 from '@/assets/stage-3.jpg';

const galleryItems = [
  {
    id: 1,
    title: 'Decor #1',
    category: 'Stage',
    description: 'Elegant wedding stage with floral arch',
    image: decor1
  },
  {
    id: 2,
    title: 'Lighting #2',
    category: 'Reception',
    description: 'Warm reception hall lighting setup',
    image: lighting2
  },
  {
    id: 3,
    title: 'Stage #3',
    category: 'Stage',
    description: 'Dramatic backdrop with uplighting',
    image: stage3
  },
  {
    id: 4,
    title: 'Decor #4',
    category: 'Lighting',
    description: 'Golden string light arrangements',
    image: lighting2
  },
  {
    id: 5,
    title: 'Lighting #5',
    category: 'Reception',
    description: 'Romantic table lighting setup',
    image: decor1
  },
  {
    id: 6,
    title: 'Stage #6',
    category: 'Stage',
    description: 'Grand ceremonial stage design',
    image: stage3
  }
];

const categories = ['All', 'Stage', 'Reception', 'Lighting'];

interface GalleryPageProps {
  onNavigate: (section: string) => void;
}

const GalleryPage = ({ onNavigate }: GalleryPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of stunning lighting and decoration setups. 
            Reference any design by its number when contacting us.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Filter className="w-5 h-5 text-muted-foreground mt-2 mr-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => setSelectedImage(item)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
                <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground">
                  {item.category}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-8 rounded-lg shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Found Your Perfect Design?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us with the reference number to discuss your event requirements
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('contact')}
            className="shadow-elegant"
          >
            Get In Touch
          </Button>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="max-w-4xl max-h-[90vh] overflow-hidden rounded-lg">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;