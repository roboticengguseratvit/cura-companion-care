import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Send,
  Heart,
  HelpCircle,
  Bug,
  Lightbulb,
  Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: 'Message Sent Successfully',
      description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: '24/7 AI Support',
      description: 'Chat with Cura anytime for immediate assistance',
      action: 'Start Chat',
      color: 'gradient-primary',
      link: '/chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 24 hours',
      action: 'support@cura-health.com',
      color: 'gradient-healing',
      link: 'mailto:support@cura-health.com'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      action: '1-800-CURA-HELP',
      color: 'bg-warm',
      link: 'tel:1-800-2872-4357'
    }
  ];

  const categories = [
    { value: 'technical', label: 'Technical Support', icon: Bug },
    { value: 'medical', label: 'Medical Questions', icon: Heart },
    { value: 'account', label: 'Account Issues', icon: Shield },
    { value: 'feature', label: 'Feature Request', icon: Lightbulb },
    { value: 'general', label: 'General Inquiry', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full shadow-soft mb-4">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Contact & Support</h1>
          <p className="text-lg text-muted-foreground">We're here to help you on your health journey. Reach out anytime.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                        className="text-base py-3"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        className="text-base py-3"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-medium">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger className="text-base py-3">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center">
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base font-medium">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Brief description of your inquiry"
                      className="text-base py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please provide as much detail as possible about your question or issue..."
                      className="min-h-[150px] text-base"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-primary shadow-soft text-xl py-4">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              {contactMethods.map((method, index) => (
                <Card key={index} className="shadow-card border-0 hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                        <Button variant="outline" size="sm" className="text-primary border-primary/20 hover:bg-primary/5">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Hours */}
            <Card className="shadow-card border-0 gradient-calm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">AI Chat Support</span>
                    <span className="text-healing font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email Support</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone Support</span>
                    <span>Mon-Fri 8AM-8PM EST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Need Quick Answers?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check our frequently asked questions for instant help with common issues.
                </p>
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            {/* Privacy Notice */}
            <Card className="shadow-card border-0 bg-healing-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-healing flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Your Privacy Matters</h3>
                    <p className="text-sm text-muted-foreground">
                      All communications are encrypted and handled according to HIPAA privacy standards. 
                      Your personal health information is always protected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;