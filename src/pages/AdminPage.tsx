import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, FileText, Settings, Plus, Search, Edit, Trash2, LogOut, Menu } from 'lucide-react';
import { products, categories } from '@/data/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminProductForm from '@/components/admin/AdminProductForm';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/admin' },
  { icon: Package, label: 'Products', to: '/admin' },
  { icon: ShoppingCart, label: 'Orders', to: '/admin' },
  { icon: FileText, label: 'Blog', to: '/admin' },
  { icon: Settings, label: 'Settings', to: '/admin' },
];

const AdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = categoryFilter === 'All' || p.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  if (showForm) return <AdminProductForm onBack={() => setShowForm(false)} />;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-5 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TK</span>
              </div>
              <span className="text-lg font-bold text-sidebar-foreground">TechKenya</span>
            </Link>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map(item => (
              <a key={item.label} href="#"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-sidebar-border">
            <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
              <LogOut className="w-4 h-4" />
              Back to Store
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card flex items-center px-6 gap-4">
          <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Products</h1>
          <div className="ml-auto flex items-center gap-3">
            <Button className="btn-primary" onClick={() => setShowForm(true)}>
              <Plus className="w-4 h-4 mr-2" /> Add Product
            </Button>
          </div>
        </header>

        <div className="p-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." className="pl-10" />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
              <SelectContent>
                {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Product</th>
                    <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3 hidden md:table-cell">Category</th>
                    <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Price</th>
                    <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Stock</th>
                    <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Status</th>
                    <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(p => (
                    <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <p className="text-sm font-medium text-card-foreground">{p.name}</p>
                            <p className="text-xs text-muted-foreground">{p.brand}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-sm text-muted-foreground hidden md:table-cell">{p.category}</td>
                      <td className="px-5 py-3 text-sm font-medium text-primary">KES {p.price.toLocaleString()}</td>
                      <td className="px-5 py-3 text-sm text-muted-foreground hidden lg:table-cell">{p.stock}</td>
                      <td className="px-5 py-3 hidden sm:table-cell">
                        <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${p.status === 'active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-muted-foreground hover:text-destructive transition-colors rounded-lg hover:bg-muted">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
