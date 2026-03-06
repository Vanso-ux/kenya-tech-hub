import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import StoreLayout from '@/components/layout/StoreLayout';
import ProductCard from '@/components/ProductCard';
import { products, categories, brands } from '@/data/store';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'All') list = list.filter(p => p.category === category);
    if (selectedBrands.length > 0) list = list.filter(p => selectedBrands.includes(p.brand));
    list = list.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return list;
  }, [category, sortBy, priceRange, selectedBrands]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-foreground mb-3">Categories</h3>
        <div className="space-y-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${category === cat ? 'bg-primary text-primary-foreground font-medium' : 'text-muted-foreground hover:bg-muted'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
        <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={200000} step={5000} className="mb-3" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>KES {priceRange[0].toLocaleString()}</span>
          <span>KES {priceRange[1].toLocaleString()}</span>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={selectedBrands.includes(brand)} onCheckedChange={() => toggleBrand(brand)} />
              <span className="text-sm text-muted-foreground">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <StoreLayout>
      <div className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground">Our Products</h1>
          <p className="text-muted-foreground mt-1">{filtered.length} products found</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6 p-6 bg-card rounded-xl border border-border">
                <FilterSidebar />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                <Button className="btn-primary mt-4" onClick={() => { setCategory('All'); setSelectedBrands([]); setPriceRange([0, 200000]); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </StoreLayout>
  );
};

export default ProductsPage;
