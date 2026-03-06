import { Link } from 'react-router-dom';
import { ArrowRight, Printer, Smartphone, Tv, Camera, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import StoreLayout from '@/components/layout/StoreLayout';
import ProductCard from '@/components/ProductCard';
import { products, blogPosts, brands } from '@/data/store';
import { Button } from '@/components/ui/button';

const segments = [
  { title: 'Printers', desc: 'Office & home printing solutions', icon: Printer, link: '/products?category=Printers' },
  { title: 'Smartphones', desc: 'Latest phones from top brands', icon: Smartphone, link: '/products?category=Smartphones' },
  { title: 'Smart TVs', desc: 'Entertainment for every home', icon: Tv, link: '/products?category=Smart+TVs' },
  { title: 'CCTV', desc: 'Security cameras & systems', icon: Camera, link: '/products?category=CCTV' },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <StoreLayout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/15 text-sm font-medium mb-6">
                🇰🇪 Kenya's #1 Tech Store
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Premium Tech,<br />Delivered to <span className="text-accent">Your Door</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Shop the latest smartphones, printers, smart TVs, and security systems from world-class brands at unbeatable prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold rounded-xl px-8 h-12">
                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8 h-12">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=500&fit=crop"
                alt="Tech products" className="rounded-2xl shadow-2xl w-full object-cover max-h-[480px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Shop by Category</h2>
            <p className="text-muted-foreground">Find exactly what you need</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((seg, i) => (
              <motion.div key={seg.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={seg.link} className="block bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group border border-border hover:border-primary/30">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <seg.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-1">{seg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{seg.desc}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Top picks from our collection</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-1 text-primary font-medium hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-16 bg-background border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-center text-xl font-semibold text-muted-foreground">Trusted by Leading Brands</h2>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-x gap-16 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div key={`${brand}-${i}`} className="flex items-center justify-center min-w-[120px]">
                <span className="text-lg font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">From Our Blog</h2>
              <p className="text-muted-foreground">Stay updated with the latest in tech</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-1 text-primary font-medium hover:underline">
              All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <div className="card-product">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold text-primary bg-accent px-2.5 py-1 rounded-full mb-3">{post.category}</span>
                    <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full object-cover" />
                      <span>{post.author.name}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </StoreLayout>
  );
};

export default Index;
