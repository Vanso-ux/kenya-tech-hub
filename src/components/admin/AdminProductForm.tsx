import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { categories } from '@/data/store';

const AdminProductForm = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="h-16 border-b border-border bg-card flex items-center px-6 gap-4">
        <button onClick={onBack} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-foreground">Add New Product</h1>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-card rounded-xl border border-border p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div><Label htmlFor="pname" className="text-foreground">Product Name</Label><Input id="pname" placeholder="e.g. Samsung Galaxy S24" className="mt-1.5" /></div>
            <div><Label htmlFor="pbrand" className="text-foreground">Brand</Label><Input id="pbrand" placeholder="e.g. Samsung" className="mt-1.5" /></div>
            <div>
              <Label className="text-foreground">Category</Label>
              <Select>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent>
                  {categories.filter(c => c !== 'All').map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div><Label htmlFor="pprice" className="text-foreground">Price (KES)</Label><Input id="pprice" type="number" placeholder="0" className="mt-1.5" /></div>
            <div><Label htmlFor="poprice" className="text-foreground">Original Price (KES)</Label><Input id="poprice" type="number" placeholder="Optional" className="mt-1.5" /></div>
            <div><Label htmlFor="pstock" className="text-foreground">Stock Quantity</Label><Input id="pstock" type="number" placeholder="0" className="mt-1.5" /></div>
          </div>

          <div className="mb-6">
            <Label htmlFor="pdesc" className="text-foreground">Description</Label>
            <Textarea id="pdesc" placeholder="Product description..." rows={4} className="mt-1.5" />
          </div>

          <div className="mb-6">
            <Label htmlFor="pfeatures" className="text-foreground">Features</Label>
            <Textarea id="pfeatures" placeholder="One feature per line..." rows={3} className="mt-1.5" />
          </div>

          {/* Image Upload */}
          <div className="mb-8">
            <Label className="text-foreground mb-2 block">Product Images</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-10 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Drag & drop images here, or click to browse</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 mb-8">
            <Switch id="pstatus" />
            <Label htmlFor="pstatus" className="text-foreground">Active</Label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onBack}>Cancel</Button>
            <Button className="btn-primary px-8">Save Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductForm;
