import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProductForm from './pages/ProductForm';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <header className="main-header">
            <h2>Ứng dụng Quản lý Sản phẩm</h2>
          </header>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;