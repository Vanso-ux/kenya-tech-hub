import { useState } from 'react';
import { Lock } from 'lucide-react';
import StoreLayout from '@/components/layout/StoreLayout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { items, totalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const shipping = totalPrice > 10000 ? 0 : 500;
  const tax = Math.round(totalPrice * 0.16);

  if (items.length === 0) {
    return (
      <StoreLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-3">No items to checkout</h1>
          <Link to="/products"><Button className="btn-primary">Browse Products</Button></Link>
        </div>
      </StoreLayout>
    );
  }

  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-bold text-foreground text-lg mb-5">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="email" className="text-foreground">Email</Label><Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" /></div>
                <div><Label htmlFor="phone" className="text-foreground">Phone</Label><Input id="phone" placeholder="+254 700 000 000" className="mt-1.5" /></div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-bold text-foreground text-lg mb-5">Shipping Address</h2>
              <div className="space-y-4">
                <div><Label htmlFor="name" className="text-foreground">Full Name</Label><Input id="name" placeholder="John Doe" className="mt-1.5" /></div>
                <div><Label htmlFor="address" className="text-foreground">Street Address</Label><Input id="address" placeholder="123 Kimathi Street" className="mt-1.5" /></div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div><Label htmlFor="city" className="text-foreground">City</Label><Input id="city" placeholder="Nairobi" className="mt-1.5" /></div>
                  <div><Label htmlFor="county" className="text-foreground">County</Label><Input id="county" placeholder="Nairobi" className="mt-1.5" /></div>
                  <div><Label htmlFor="zip" className="text-foreground">ZIP Code</Label><Input id="zip" placeholder="00100" className="mt-1.5" /></div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-bold text-foreground text-lg mb-5">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                <div className="flex items-center space-x-3 border border-border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="mpesa" id="mpesa" />
                  <Label htmlFor="mpesa" className="cursor-pointer flex-1 text-foreground">
                    <span className="font-medium">M-Pesa</span>
                    <span className="block text-sm text-muted-foreground">Pay via M-Pesa mobile money</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border border-border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="cursor-pointer flex-1 text-foreground">
                    <span className="font-medium">Card Payment</span>
                    <span className="block text-sm text-muted-foreground">Visa, Mastercard accepted</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <h2 className="font-bold text-foreground text-lg mb-5">Order Summary</h2>
              <div className="space-y-3 mb-5">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-3 items-center">
                    <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-card-foreground">KES {(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2 mb-5">
                <div className="flex justify-between text-sm text-muted-foreground"><span>Subtotal</span><span>KES {totalPrice.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm text-muted-foreground"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `KES ${shipping}`}</span></div>
                <div className="flex justify-between text-sm text-muted-foreground"><span>Tax (16% VAT)</span><span>KES {tax.toLocaleString()}</span></div>
              </div>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between font-bold text-foreground text-lg">
                  <span>Total</span><span>KES {(totalPrice + shipping + tax).toLocaleString()}</span>
                </div>
              </div>
              <Button className="btn-primary w-full h-12 text-base mb-4">Place Order</Button>
              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" /> Secure Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
};

export default CheckoutPage;
