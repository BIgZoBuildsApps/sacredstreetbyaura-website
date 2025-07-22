import { Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo1 from '../assets/sacred_street_logo_concept_1.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '#' },
      { name: 'Collections', href: '#collections' },
      { name: 'Statement Pieces', href: '#' },
      { name: 'Accessories', href: '#' },
      { name: 'Gift Cards', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#manifesto' },
      { name: 'Manifesto', href: '#manifesto' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Wholesale', href: '#' }
    ],
    support: [
      { name: 'Size Guide', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-[var(--void-black)] border-t border-white/10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white">
              JOIN THE <span className="sacred-text-gradient">SACRED CIRCLE</span>
            </h3>
            <p className="text-white/70 text-lg mb-8">
              Be the first to know about new drops, exclusive releases, and theological discourse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--divine-gold)] focus:border-transparent"
              />
              <Button className="bg-[var(--sacrificial-red)] hover:bg-[var(--sacrificial-red)]/80 text-white px-8 py-3 font-semibold uppercase tracking-wider">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo1} alt="Sacred Street" className="h-10 w-10 object-contain" />
              <span className="font-display font-bold text-xl sacred-text-gradient">
                SACRED STREET
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Where sacred meets street. Premium streetwear that challenges conventions 
              and sparks discourse through provocative design.
            </p>
            <div className="space-y-3 text-white/60">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[var(--divine-gold)]" />
                <span className="text-sm">Los Angeles, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[var(--divine-gold)]" />
                <span className="text-sm">+1 (555) SACRED-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[var(--divine-gold)]" />
                <span className="text-sm">hello@sacredstreet.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[var(--divine-gold)] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[var(--divine-gold)] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[var(--divine-gold)] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[var(--divine-gold)] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} Sacred Street. All rights reserved. Theological warfare in cotton and code.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/60 hover:text-[var(--divine-gold)] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Quote */}
            <div className="text-white/40 text-sm italic">
              "Repent? Nah. Rebuild."
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

