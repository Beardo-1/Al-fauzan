
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Al Fauzan Business District',
      location: 'Riyadh, Saudi Arabia',
      year: '2024',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      description: 'A modern commercial complex featuring state-of-the-art office spaces and retail outlets.',
      status: 'Under Construction'
    },
    {
      id: 2,
      title: 'Industrial Park Excellence',
      location: 'Dammam, Saudi Arabia',
      year: '2023',
      type: 'Industrial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      description: 'Premium industrial facilities designed for modern manufacturing and logistics.',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Luxury Residential Towers',
      location: 'Jeddah, Saudi Arabia',
      year: '2024',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      description: 'High-end residential towers with panoramic city views and premium amenities.',
      status: 'Planning Phase'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our latest developments that shape the future of real estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-black rounded-lg overflow-hidden hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Status Badge - REMOVED */}

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{project.location}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{project.year}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="text-yellow-400 hover:text-black hover:bg-yellow-400 p-0 h-auto font-semibold group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover-scale"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
