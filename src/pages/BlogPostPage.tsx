import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Facebook, Twitter, Linkedin, Clock, Calendar } from 'lucide-react';
import StoreLayout from '@/components/layout/StoreLayout';
import { blogPosts } from '@/data/store';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">Back to blog</Link>
      </div>
    </StoreLayout>
  );

  return (
    <StoreLayout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate">{post.title}</span>
        </div>
      </div>

      <article className="container mx-auto px-4 py-10 max-w-4xl">
        <span className="inline-block text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full mb-4">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-4 mb-8">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-foreground">{post.author.name}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="flex gap-2 mb-8">
          {[Facebook, Twitter, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="aspect-[2/1] overflow-hidden rounded-2xl mb-10">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose max-w-none text-muted-foreground leading-relaxed">
          <p>{post.excerpt}</p>
          <p className="mt-4">This is a detailed guide covering all the essential information you need to make an informed purchase decision. We've tested dozens of products and compiled our findings into this comprehensive guide.</p>
          <h2 className="text-foreground">What to Look For</h2>
          <p>When shopping for tech products, consider factors like performance, build quality, warranty support, and value for money. Kenyan consumers should also consider local service center availability.</p>
          <h2 className="text-foreground">Our Top Picks</h2>
          <p>After extensive testing and research, we've selected the best options across different price points to suit every budget.</p>
        </div>

        {/* Comments Section */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Comments</h2>
          <div className="bg-card rounded-xl border border-border p-6 mb-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input placeholder="Your Name" className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm" />
              <input placeholder="Your Email" className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm" />
            </div>
            <textarea placeholder="Write a comment..." rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm mb-4 resize-none" />
            <button className="btn-primary px-6 py-2.5 text-sm">Post Comment</button>
          </div>
          <p className="text-muted-foreground text-sm">No comments yet. Be the first to share your thoughts!</p>
        </div>
      </article>
    </StoreLayout>
  );
};

export default BlogPostPage;
