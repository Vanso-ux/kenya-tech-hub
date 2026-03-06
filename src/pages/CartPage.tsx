import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import StoreLayout from '@/components/layout/StoreLayout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();
  const shipping = totalPrice > 10000 ? 0 : 500;
  const tax = Math.round(totalPrice * 0.16);

  if (items.length === 0) {
    return (
      <StoreLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <ShoppingBag className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-foreground mb-3">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any items yet.</p>
          <Link to="/products"><Button className="btn-primary px-8">Browse Products</Button></Link>
        </div>
      </StoreLayout>
    );
  }

  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground mb-8">{items.length} item{items.length > 1 ? 's' : ''}</p>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="bg-card rounded-xl border border-border p-4 flex gap-4 items-center">
                <img src={item.product.image} alt={item.product.name} className="w-24 h-24 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-card-foreground truncate">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                  <p className="text-primary font-bold mt-1">KES {item.product.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-3 py-2 hover:bg-muted transition-colors text-foreground">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-3 py-2 text-sm font-medium text-foreground">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3 py-2 hover:bg-muted transition-colors text-foreground">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <p className="font-bold text-foreground w-28 text-right hidden sm:block">
                  KES {(item.product.price * item.quantity).toLocaleString()}
                </p>
                <button onClick={() => removeItem(item.product.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <h2 className="font-bold text-foreground text-lg mb-5">Order Summary</h2>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span><span>KES {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shipping</span><span>{shipping === 0 ? 'Free' : `KES ${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Tax (16% VAT)</span><span>KES {tax.toLocaleString()}</span>
                </div>
              </div>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between font-bold text-foreground text-lg">
                  <span>Total</span><span>KES {(totalPrice + shipping + tax).toLocaleString()}</span>
                </div>
              </div>
              <Link to="/checkout">
                <Button className="btn-primary w-full h-12 text-base">Proceed to Checkout</Button>
              </Link>
              <Link to="/products" className="block text-center text-sm text-primary hover:underline mt-4">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
};

export default CartPage;
