import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import StoreLayout from '@/components/layout/StoreLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  return (
    <StoreLayout>
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Have a question or need help? We'd love to hear from you.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Send us a Message</h2>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="cname" className="text-foreground">Name</Label><Input id="cname" placeholder="John Doe" className="mt-1.5" /></div>
                  <div><Label htmlFor="cemail" className="text-foreground">Email</Label><Input id="cemail" type="email" placeholder="you@example.com" className="mt-1.5" /></div>
                </div>
                <div><Label htmlFor="cphone" className="text-foreground">Phone</Label><Input id="cphone" placeholder="+254 700 000 000" className="mt-1.5" /></div>
                <div><Label htmlFor="csubject" className="text-foreground">Subject</Label><Input id="csubject" placeholder="How can we help?" className="mt-1.5" /></div>
                <div><Label htmlFor="cmessage" className="text-foreground">Message</Label><Textarea id="cmessage" placeholder="Tell us more..." rows={5} className="mt-1.5" /></div>
                <Button className="btn-primary h-12 px-8">Send Message</Button>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: 'Our Address', text: 'Kimathi Street, Nairobi, Kenya' },
              { icon: Phone, title: 'Phone', text: '+254 700 123 456' },
              { icon: Mail, title: 'Email', text: 'info@techkenya.co.ke' },
              { icon: Clock, title: 'Business Hours', text: 'Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-border max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819476962921!2d36.81725231475404!3d-1.2841499990639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22ba7ac61%3A0xb0d28f5c39e4fcba!2sKimathi%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1697049277694!5m2!1sen!2ske"
            width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Our Location" />
        </div>
      </div>
    </StoreLayout>
  );
};

export default ContactPage;
