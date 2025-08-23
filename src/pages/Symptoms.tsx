import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Heart, TrendingUp, Save, BarChart3 } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const Symptoms = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [painLevel, setPainLevel] = useState([3]);
  const [energyLevel, setEnergyLevel] = useState([5]);
  const [moodLevel, setMoodLevel] = useState([6]);
  const [sleepQuality, setSleepQuality] = useState([7]);
  const [symptoms, setSymptoms] = useState('');
  const [notes, setNotes] = useState('');
  const [medication, setMedication] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically save to a database
    toast({
      title: 'Symptoms Logged Successfully',
      description: 'Your daily health tracking has been saved.',
    });

    // Reset form
    setPainLevel([3]);
    setEnergyLevel([5]);
    setMoodLevel([6]);
    setSleepQuality([7]);
    setSymptoms('');
    setNotes('');
    setMedication('');
  };

  const commonSymptoms = [
    'Fatigue', 'Joint Pain', 'Headache', 'Nausea', 'Dizziness', 
    'Muscle Aches', 'Shortness of Breath', 'Sleep Issues', 'Anxiety', 'Depression'
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-healing rounded-full shadow-soft mb-4">
            <Heart className="w-8 h-8 text-healing-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Daily Symptom Tracker</h1>
          <p className="text-lg text-muted-foreground">Log your daily symptoms and health patterns to better understand your condition</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Tracking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-primary" />
                  Today's Health Check
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-lg font-medium">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal text-lg py-3"
                        >
                          <CalendarIcon className="mr-2 h-5 w-5" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(newDate) => newDate && setDate(newDate)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Pain Level */}
                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Pain Level: {painLevel[0]}/10</Label>
                    <div className="px-3">
                      <Slider
                        value={painLevel}
                        onValueChange={setPainLevel}
                        max={10}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>No Pain</span>
                        <span>Severe Pain</span>
                      </div>
                    </div>
                  </div>

                  {/* Energy Level */}
                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Energy Level: {energyLevel[0]}/10</Label>
                    <div className="px-3">
                      <Slider
                        value={energyLevel}
                        onValueChange={setEnergyLevel}
                        max={10}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>Exhausted</span>
                        <span>Very Energetic</span>
                      </div>
                    </div>
                  </div>

                  {/* Mood Level */}
                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Mood Level: {moodLevel[0]}/10</Label>
                    <div className="px-3">
                      <Slider
                        value={moodLevel}
                        onValueChange={setMoodLevel}
                        max={10}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>Very Low</span>
                        <span>Excellent</span>
                      </div>
                    </div>
                  </div>

                  {/* Sleep Quality */}
                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Sleep Quality: {sleepQuality[0]}/10</Label>
                    <div className="px-3">
                      <Slider
                        value={sleepQuality}
                        onValueChange={setSleepQuality}
                        max={10}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>Poor Sleep</span>
                        <span>Excellent Sleep</span>
                      </div>
                    </div>
                  </div>

                  {/* Medication Taken */}
                  <div className="space-y-2">
                    <Label htmlFor="medication" className="text-lg font-medium">Medications Taken Today</Label>
                    <Input
                      id="medication"
                      value={medication}
                      onChange={(e) => setMedication(e.target.value)}
                      placeholder="List medications and dosages..."
                      className="text-lg py-3"
                    />
                  </div>

                  {/* Specific Symptoms */}
                  <div className="space-y-2">
                    <Label htmlFor="symptoms" className="text-lg font-medium">Specific Symptoms</Label>
                    <Textarea
                      id="symptoms"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="Describe any specific symptoms you experienced today..."
                      className="min-h-[100px] text-lg"
                    />
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-lg font-medium">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any other observations about your health today..."
                      className="min-h-[100px] text-lg"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full gradient-primary shadow-soft text-xl py-4">
                    <Save className="w-5 h-5 mr-2" />
                    Save Today's Entry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Symptom Selection */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Common Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {commonSymptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (!symptoms.includes(symptom)) {
                          setSymptoms(prev => prev ? `${prev}, ${symptom}` : symptom);
                        }
                      }}
                      className="text-sm border-primary/20 text-primary hover:bg-primary/5"
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Insights */}
            <Card className="shadow-card border-0 gradient-calm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Health Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-card rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Weekly Average</p>
                    <p className="text-xs text-muted-foreground">Pain Level: 4.2/10</p>
                    <p className="text-xs text-muted-foreground">Energy: 5.8/10</p>
                    <p className="text-xs text-muted-foreground">Mood: 6.5/10</p>
                  </div>
                  <div className="p-3 bg-healing-soft rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-2">Tracking Tip</p>
                    <p className="text-xs text-muted-foreground">Consistent daily tracking helps identify patterns and triggers in your condition.</p>
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

export default Symptoms;