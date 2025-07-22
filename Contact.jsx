import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@sacredstreet.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) SACRED-1",
      subtitle: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Los Angeles, CA",
      subtitle: "Where sacred meets street"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-purple-600 to-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-blue-400 to-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'from-red-500 to-red-700' }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 sacred-gradient opacity-95"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--divine-gold)] rounded-full opacity-10 animate-sacred-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white rounded-full opacity-10 animate-sacred-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 text-white">
            GET IN <span className="sacred-text-gradient">TOUCH</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to join the revolution? Have questions about our theological warfare? 
            Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 sacred-border">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--divine-gold)] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--divine-gold)] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--divine-gold)] focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--divine-gold)] focus:border-transparent resize-none"
                  placeholder="Tell us your thoughts..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[var(--sacrificial-red)] hover:bg-[var(--sacrificial-red)]/80 text-white px-8 py-4 text-lg font-semibold sacred-hover uppercase tracking-wider"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[var(--sacrificial-red)] rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{info.title}</h4>
                    <p className="text-[var(--divine-gold)] font-medium mb-1">{info.details}</p>
                    <p className="text-white/60 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sacred-border">
              <h4 className="font-display text-xl font-bold text-white mb-4">
                Follow the Movement
              </h4>
              <p className="text-white/70 mb-6">
                Join our community and stay updated on the latest drops, theological discourse, 
                and behind-the-scenes content.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} hover:scale-110 transition-transform duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sacred-border">
              <blockquote className="text-xl font-display font-bold text-white mb-4 leading-tight">
                "Every conversation is a chance to challenge conventions and spark change."
              </blockquote>
              <cite className="text-[var(--divine-gold)] font-medium uppercase tracking-wider text-sm">
                — Sacred Street Philosophy
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

