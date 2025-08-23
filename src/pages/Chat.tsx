import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Heart, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Cura, your AI health companion. I'm here to provide emotional support, help you track your health, and answer any questions you might have. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "I understand how challenging it can be to manage chronic illness. Thank you for sharing that with me. Would you like to talk about what's on your mind today?",
      "It's important to acknowledge your feelings. Many people with chronic conditions experience similar emotions. How can I best support you right now?",
      "That sounds difficult. Remember that it's okay to have both good and challenging days. Would you like some suggestions for managing this situation?",
      "I'm here to listen and support you. Your health journey is unique, and I want to help you navigate it in a way that feels right for you.",
      "Thank you for trusting me with your concerns. Would you like to explore some coping strategies, or would you prefer to track your symptoms today?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const quickActions = [
    "How are you feeling today?",
    "I need medication reminders",
    "Track my symptoms",
    "I'm feeling anxious",
    "Tell me about my condition"
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full shadow-soft mb-4">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Chat with Cura</h1>
          <p className="text-lg text-muted-foreground">Your 24/7 AI health companion is here to listen and support you</p>
        </div>

        {/* Chat Interface */}
        <Card className="shadow-card border-0 h-[600px] flex flex-col">
          {/* Messages Area */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'ai' 
                        ? 'gradient-primary' 
                        : 'bg-healing'
                    }`}>
                      {message.sender === 'ai' ? (
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      ) : (
                        <User className="w-5 h-5 text-healing-foreground" />
                      )}
                    </div>
                    
                    <div className={`p-4 rounded-2xl ${
                      message.sender === 'ai'
                        ? 'bg-muted text-foreground'
                        : 'gradient-primary text-primary-foreground'
                    }`}>
                      <p className="text-lg leading-relaxed">{message.content}</p>
                      <p className={`text-sm mt-2 ${
                        message.sender === 'ai' 
                          ? 'text-muted-foreground' 
                          : 'text-primary-foreground/70'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="p-4 border-t border-border">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputMessage(action)}
                  className="text-sm border-primary/20 text-primary hover:bg-primary/5"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {action}
                </Button>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message here... I'm here to listen and help."
                className="flex-1 text-lg py-3 border-primary/20 focus:border-primary"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="gradient-primary shadow-soft px-6"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Support Notice */}
        <Card className="mt-6 bg-healing-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-healing rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Heart className="w-4 h-4 text-healing-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                <p className="text-muted-foreground">
                  While Cura provides emotional support and health information, it's not a replacement for professional medical advice. 
                  In case of emergencies, please contact your healthcare provider or emergency services immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;