import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full shadow-soft mb-6">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">About Cura</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering chronically ill patients with compassionate AI support and comprehensive health management tools.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="shadow-card border-0 gradient-calm">
            <CardContent className="p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-healing rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-healing-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                Living with a chronic illness can be isolating and overwhelming. At Cura, we believe that no one should face their health journey alone. Our AI-powered companion provides the emotional support, medical guidance, and practical tools needed to navigate chronic illness with confidence and peace of mind.
              </p>
              <p className="text-xl text-foreground/80 leading-relaxed">
                We're committed to making healthcare more accessible, personal, and compassionate through the power of artificial intelligence and human-centered design.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* How We Help */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">How Cura Helps</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Emotional Support</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our AI companion provides 24/7 emotional support, offering a listening ear and compassionate responses whenever you need someone to talk to about your health concerns or daily challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 gradient-healing rounded-full flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-healing-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Medical Guidance</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get reliable information about your condition, treatment options, and self-care strategies. While not replacing professional medical advice, Cura helps you stay informed and prepared for healthcare decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-warm rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-warm-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Daily Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Track symptoms, manage medications, set appointment reminders, and maintain daily routines that support your health and well-being with our comprehensive management tools.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Personalized Care</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cura learns from your interactions and preferences to provide increasingly personalized support, recommendations, and insights tailored to your unique health journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section>
          <div className="gradient-hero rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Compassion</h3>
                <p className="text-white/90 text-lg">Every interaction is designed with empathy and understanding for the challenges of chronic illness.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Privacy</h3>
                <p className="text-white/90 text-lg">Your health information is secure and private, with robust protections for your personal data.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Accessibility</h3>
                <p className="text-white/90 text-lg">Healthcare support should be available to everyone, anytime, regardless of location or circumstances.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;