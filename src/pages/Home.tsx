import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Heart, Shield, Users, ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-full shadow-glow mb-8">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your AI Companion for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
              Better Health
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cura provides 24/7 emotional and medical support for chronically ill patients through AI-powered conversations, symptom tracking, and personalized care reminders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/chat">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-soft px-8 py-4 text-xl font-semibold">
                Start Chatting
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-xl font-semibold">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 gradient-calm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-healing rounded-full mb-6">
              <Sparkles className="w-6 h-6 text-healing-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Care Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your health journey with confidence and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-soft transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">AI Companion</h3>
                <p className="text-muted-foreground">24/7 emotional support and medical guidance through caring conversations.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-healing rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-healing-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Symptom Tracking</h3>
                <p className="text-muted-foreground">Monitor your daily symptoms and mood patterns with simple, intuitive logging.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-warm-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Smart Reminders</h3>
                <p className="text-muted-foreground">Never miss medications, appointments, or daily routines with personalized alerts.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Educational Resources</h3>
                <p className="text-muted-foreground">Access curated guides and resources for managing chronic illness effectively.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of patients who have found comfort, support, and better health management with Cura.
          </p>
          <Link to="/chat">
            <Button size="lg" className="gradient-primary shadow-soft px-8 py-4 text-xl font-semibold">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;