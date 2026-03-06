import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, ChevronRight } from 'lucide-react';
import StoreLayout from '@/components/layout/StoreLayout';
import { products } from '@/data/store';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        <Link to="/products" className="text-primary hover:underline mt-4 inline-block">Back to products</Link>
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
          <Link to="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/products?category=${product.category}`} className="hover:text-primary">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-muted rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-colors cursor-pointer">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">KES {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="ml-3 text-lg text-muted-foreground line-through">KES {product.originalPrice.toLocaleString()}</span>
              )}
              {product.originalPrice && (
                <span className="ml-3 inline-block bg-destructive/10 text-destructive text-sm font-medium px-2 py-0.5 rounded">
                  Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {product.features && (
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-foreground hover:bg-muted transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-3 font-semibold text-foreground min-w-[50px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-foreground hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-muted-foreground">{product.stock} in stock</span>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="btn-primary flex-1 h-13 text-base" onClick={() => addItem(product, qty)}>
                <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
              </Button>
              <Link to="/checkout" className="flex-1">
                <Button size="lg" variant="outline" className="btn-outline-primary w-full h-13 text-base" onClick={() => addItem(product, qty)}>
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="bg-muted">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none text-muted-foreground">
                <p>{product.description}</p>
                {product.features && (
                  <ul className="mt-4 space-y-1">
                    {product.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                )}
              </div>
            </TabsContent>
            <TabsContent value="specs" className="mt-6">
              {product.specs && (
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  {Object.entries(product.specs).map(([k, v], i) => (
                    <div key={k} className={`flex py-3 px-5 text-sm ${i % 2 === 0 ? 'bg-muted/50' : ''}`}>
                      <span className="w-40 font-medium text-foreground">{k}</span>
                      <span className="text-muted-foreground">{v}</span>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </StoreLayout>
  );
};

export default ProductDetailPage;
