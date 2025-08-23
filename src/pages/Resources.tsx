import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  ExternalLink, 
  Search, 
  Heart, 
  Users, 
  Phone, 
  Video,
  FileText,
  Stethoscope,
  Shield,
  Brain
} from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Health Education',
      icon: BookOpen,
      color: 'gradient-primary',
      resources: [
        {
          title: 'Understanding Chronic Pain',
          description: 'Comprehensive guide to managing chronic pain conditions',
          type: 'Article',
          readTime: '8 min read',
          link: '#'
        },
        {
          title: 'Medication Management 101',
          description: 'Essential tips for organizing and tracking medications',
          type: 'Guide',
          readTime: '12 min read',
          link: '#'
        },
        {
          title: 'Living with Autoimmune Conditions',
          description: 'Practical advice for daily life with autoimmune diseases',
          type: 'Article',
          readTime: '15 min read',
          link: '#'
        }
      ]
    },
    {
      title: 'Mental Health & Wellness',
      icon: Brain,
      color: 'gradient-healing',
      resources: [
        {
          title: 'Coping with Chronic Illness Anxiety',
          description: 'Strategies for managing anxiety related to health conditions',
          type: 'Video',
          readTime: '20 min watch',
          link: '#'
        },
        {
          title: 'Mindfulness for Chronic Pain',
          description: 'Meditation and mindfulness techniques for pain management',
          type: 'Audio',
          readTime: '25 min listen',
          link: '#'
        },
        {
          title: 'Building Resilience',
          description: 'Developing emotional strength during health challenges',
          type: 'Article',
          readTime: '10 min read',
          link: '#'
        }
      ]
    },
    {
      title: 'Support & Community',
      icon: Users,
      color: 'bg-warm',
      resources: [
        {
          title: 'Chronic Illness Support Groups',
          description: 'Local and online support groups for various conditions',
          type: 'Directory',
          readTime: 'Browse',
          link: '#'
        },
        {
          title: 'Family & Caregiver Resources',
          description: 'Guidance for loved ones supporting chronically ill patients',
          type: 'Guide',
          readTime: '18 min read',
          link: '#'
        },
        {
          title: 'Patient Advocacy Groups',
          description: 'Organizations advocating for chronic illness patients',
          type: 'Directory',
          readTime: 'Browse',
          link: '#'
        }
      ]
    },
    {
      title: 'Healthcare Navigation',
      icon: Stethoscope,
      color: 'bg-secondary',
      resources: [
        {
          title: 'Preparing for Doctor Visits',
          description: 'How to make the most of your healthcare appointments',
          type: 'Checklist',
          readTime: '5 min read',
          link: '#'
        },
        {
          title: 'Understanding Medical Bills',
          description: 'Guide to interpreting and managing healthcare costs',
          type: 'Guide',
          readTime: '14 min read',
          link: '#'
        },
        {
          title: 'Second Opinion Guide',
          description: 'When and how to seek a second medical opinion',
          type: 'Article',
          readTime: '7 min read',
          link: '#'
        }
      ]
    }
  ];

  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      available: '24/7',
      description: 'Crisis support and suicide prevention'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      available: '24/7',
      description: 'Free crisis support via text message'
    },
    {
      name: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      available: '24/7',
      description: 'Mental health and substance abuse support'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full shadow-soft mb-4">
            <BookOpen className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Health Resources</h1>
          <p className="text-lg text-muted-foreground">Curated educational materials and support resources for chronic illness management</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search resources, articles, guides..."
              className="pl-10 text-lg py-3 border-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <Card className="shadow-card border-0 bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Phone className="w-6 h-6 mr-2 text-destructive" />
                Emergency & Crisis Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg border border-destructive/10">
                    <h3 className="font-semibold text-foreground mb-2">{contact.name}</h3>
                    <p className="text-lg font-bold text-destructive mb-1">{contact.number}</p>
                    <p className="text-sm text-muted-foreground mb-2">{contact.available}</p>
                    <p className="text-sm text-foreground">{contact.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="shadow-card border-0 hover:shadow-soft transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground leading-tight">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Access Resource
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Resources */}
        <section className="mt-16">
          <div className="gradient-hero rounded-3xl p-12">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Need More Support?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our AI companion is available 24/7 to help you navigate these resources and provide personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-soft px-8 py-4">
                  <Heart className="w-5 h-5 mr-2" />
                  Chat with Cura
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4">
                  <Video className="w-5 h-5 mr-2" />
                  Schedule Support Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Request */}
        <section className="mt-12">
          <Card className="shadow-card border-0 gradient-calm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                Can't Find What You're Looking For?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-muted-foreground mb-6">
                  We're constantly adding new resources. Let us know what information would be helpful for your health journey.
                </p>
                <Button className="gradient-primary shadow-soft px-8 py-3">
                  <FileText className="w-5 h-5 mr-2" />
                  Request a Resource
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Resources;