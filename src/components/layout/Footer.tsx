import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TK</span>
              </div>
              <span className="text-xl font-bold text-background">TechKenya</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted technology partner in Kenya. We provide the latest gadgets, electronics, and tech solutions at competitive prices.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Products', 'Blog', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-background font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2.5">
              {['Shipping Policy', 'Returns & Refunds', 'FAQ', 'Terms & Conditions', 'Privacy Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Kimathi Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <span>info@techkenya.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5">
          <p className="text-center text-xs text-background/50">
            © 2024 TechKenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
