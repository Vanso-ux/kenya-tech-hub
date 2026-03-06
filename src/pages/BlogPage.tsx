import { useState } from 'react';
import { Link } from 'react-router-dom';
import StoreLayout from '@/components/layout/StoreLayout';
import { blogPosts } from '@/data/store';

const blogCategories = ['All', 'Product Guides', 'Industry News', 'Promotions', 'Brand Stories'];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter(p => p.category === activeCategory);

  return (
    <StoreLayout>
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Our Blog</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Stay updated with the latest tech news, product guides, and industry insights.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {blogCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-accent'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="card-product">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-primary bg-accent px-2.5 py-1 rounded-full mb-3">{post.category}</span>
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full object-cover" />
                    <span>{post.author.name}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No posts found in this category.</p>
        )}
      </div>
    </StoreLayout>
  );
};

export default BlogPage;
