import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/store';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  return (
    <div className="card-product group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-card-foreground leading-snug mb-2 hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-lg font-bold text-primary">KES {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="block text-xs text-muted-foreground line-through">KES {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <Button size="sm" className="btn-primary h-9 px-3" onClick={(e) => { e.preventDefault(); addItem(product); }}>
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
