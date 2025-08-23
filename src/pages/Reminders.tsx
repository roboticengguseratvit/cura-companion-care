import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Bell, Plus, Pill, Calendar, Clock, AlertCircle, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Reminder {
  id: string;
  type: 'medication' | 'appointment' | 'routine';
  title: string;
  description: string;
  time: string;
  frequency: string;
  active: boolean;
}

const Reminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: '1',
      type: 'medication',
      title: 'Morning Medication',
      description: 'Take 2 tablets with breakfast',
      time: '08:00',
      frequency: 'daily',
      active: true
    },
    {
      id: '2',
      type: 'appointment',
      title: 'Cardiology Check-up',
      description: 'Dr. Smith - Regular follow-up',
      time: '14:30',
      frequency: 'monthly',
      active: true
    },
    {
      id: '3',
      type: 'routine',
      title: 'Evening Walk',
      description: '15-minute gentle walk',
      time: '18:00',
      frequency: 'daily',
      active: true
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    description: '',
    time: '',
    frequency: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.type || !formData.title || !formData.time || !formData.frequency) {
      toast({
        title: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    const newReminder: Reminder = {
      id: Date.now().toString(),
      type: formData.type as 'medication' | 'appointment' | 'routine',
      title: formData.title,
      description: formData.description,
      time: formData.time,
      frequency: formData.frequency,
      active: true
    };

    setReminders(prev => [...prev, newReminder]);
    setFormData({ type: '', title: '', description: '', time: '', frequency: '' });
    setShowForm(false);

    toast({
      title: 'Reminder Created',
      description: 'Your new reminder has been set up successfully.',
    });
  };

  const deleteReminder = (id: string) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
    toast({
      title: 'Reminder Deleted',
      description: 'The reminder has been removed.',
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return <Pill className="w-4 h-4" />;
      case 'appointment':
        return <Calendar className="w-4 h-4" />;
      case 'routine':
        return <Clock className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'medication':
        return 'bg-primary';
      case 'appointment':
        return 'bg-healing';
      case 'routine':
        return 'bg-warm';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-warm rounded-full shadow-soft mb-4">
            <Bell className="w-8 h-8 text-warm-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Smart Reminders</h1>
          <p className="text-lg text-muted-foreground">Never miss important medications, appointments, or daily routines</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reminders List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Your Reminders</h2>
              <Button 
                onClick={() => setShowForm(!showForm)}
                className="gradient-primary shadow-soft"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Reminder
              </Button>
            </div>

            {/* Add Reminder Form */}
            {showForm && (
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Create New Reminder</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-base font-medium">Type *</Label>
                        <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select reminder type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medication">Medication</SelectItem>
                            <SelectItem value="appointment">Appointment</SelectItem>
                            <SelectItem value="routine">Daily Routine</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-base font-medium">Frequency *</Label>
                        <Select value={formData.frequency} onValueChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="How often?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="as-needed">As Needed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base font-medium">Title *</Label>
                      <Input
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., Morning Medication"
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base font-medium">Time *</Label>
                      <Input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base font-medium">Description</Label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Additional details..."
                        className="text-base"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit" className="gradient-primary">
                        Create Reminder
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Reminders List */}
            <div className="space-y-4">
              {reminders.map((reminder) => (
                <Card key={reminder.id} className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${getTypeColor(reminder.type)} rounded-full flex items-center justify-center`}>
                          {getTypeIcon(reminder.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{reminder.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {reminder.type}
                            </Badge>
                          </div>
                          {reminder.description && (
                            <p className="text-muted-foreground mb-2">{reminder.description}</p>
                          )}
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {reminder.time}
                            </span>
                            <span className="capitalize">{reminder.frequency}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteReminder(reminder.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Reminders */}
            <Card className="shadow-card border-0 gradient-calm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Today's Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reminders.filter(r => r.frequency === 'daily').map(reminder => (
                    <div key={reminder.id} className="p-3 bg-card rounded-lg flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 ${getTypeColor(reminder.type)} rounded-full flex items-center justify-center`}>
                          {getTypeIcon(reminder.type)}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{reminder.title}</p>
                          <p className="text-xs text-muted-foreground">{reminder.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Reminder Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Set medication reminders 15 minutes before meal times</p>
                  <p>• Include dosage information in descriptions</p>
                  <p>• Use routine reminders for self-care activities</p>
                  <p>• Set appointment reminders 1 day in advance</p>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="shadow-card border-0 bg-healing-soft">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Active Reminders</span>
                    <span className="text-sm font-bold">{reminders.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">This Week</span>
                    <span className="text-sm font-bold">85% Completed</span>
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

export default Reminders;