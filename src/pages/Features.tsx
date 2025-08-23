import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Heart, 
  Bell, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Clock, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Chat Companion',
      description: 'Engage in meaningful conversations with our AI companion, available 24/7 for emotional support and guidance.',
      benefits: [
        'Always available when you need support',
        'Empathetic responses tailored to your needs',
        'Confidential and judgment-free conversations',
        'Multilingual support for better accessibility'
      ],
      color: 'gradient-primary',
      link: '/chat'
    },
    {
      icon: Heart,
      title: 'Symptom Tracker',
      description: 'Monitor your daily symptoms and mood patterns with intuitive logging tools designed for ease of use.',
      benefits: [
        'Simple daily symptom logging',
        'Mood and energy level tracking',
        'Pattern recognition and insights',
        'Export data for healthcare providers'
      ],
      color: 'gradient-healing',
      link: '/symptoms'
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Never miss important medications, appointments, or daily routines with personalized reminder systems.',
      benefits: [
        'Medication reminders with dosage info',
        'Appointment and follow-up alerts',
        'Daily routine and self-care reminders',
        'Customizable notification preferences'
      ],
      color: 'bg-warm',
      link: '/reminders'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Access a curated library of educational materials, guides, and resources for chronic illness management.',
      benefits: [
        'Evidence-based health information',
        'Self-care guides and tips',
        'Treatment option explanations',
        'Community support resources'
      ],
      color: 'bg-secondary',
      link: '/resources'
    },
    {
      icon: BarChart3,
      title: 'Health Analytics',
      description: 'Visualize your health data with comprehensive charts and insights to better understand your patterns.',
      benefits: [
        'Symptom trend visualization',
        'Medication adherence tracking',
        'Mood pattern analysis',
        'Progress reporting tools'
      ],
      color: 'bg-accent',
      link: '/symptoms'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your health data is protected with enterprise-grade security and strict privacy controls.',
      benefits: [
        'End-to-end encryption',
        'HIPAA-compliant data handling',
        'No data sharing without consent',
        'Secure cloud storage'
      ],
      color: 'bg-muted',
      link: '/about'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Comprehensive Features</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover all the tools and features designed to support your chronic illness management journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card border-0 hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 ${feature.color} rounded-full flex items-center justify-center`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{feature.title}</CardTitle>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-healing rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={feature.link}>
                  <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                    Try This Feature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <section className="gradient-calm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Additional Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">24/7 Availability</h3>
              <p className="text-muted-foreground">Support when you need it most, day or night, without appointments or waiting times.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-healing-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Mobile Optimized</h3>
              <p className="text-muted-foreground">Fully responsive design that works seamlessly on all devices and screen sizes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-warm-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Personalized Care</h3>
              <p className="text-muted-foreground">AI that learns and adapts to your unique needs, preferences, and health patterns.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="gradient-hero rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Cura?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your journey toward better health management with our comprehensive AI companion.
            </p>
            <Link to="/chat">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-soft px-8 py-4 text-xl font-semibold">
                Start Using Cura Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;