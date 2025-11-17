import {useState, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {useProductContext} from '../context/ProductContext';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

const ProductList = () => {
  const {state, dispatch} = useProductContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return state.products.filter(p => {
      const matchName = p.ten.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = category ? p.danhMuc === category : true;
      const matchPrice = p.gia >= minPrice && (maxPrice ? p.gia <= maxPrice : true);
      return matchName && matchCat && matchPrice;
    });
  }, [state.products, searchTerm, category, minPrice, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      dispatch({type: 'DELETE_PRODUCT', payload: id});
    }
  };
  return(
    <div className="container">
      <h2>Danh sách sản phẩm</h2>
      <Link to="/add" className="btn btn-primary">Thêm sản phẩm mới</Link>
      
      <div className="toolbar">
        <SearchBar onSearch={setSearchTerm} />
        <Filter 
          onCategoryChange={setCategory}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={(val) => setMaxPrice(val || Infinity)}
        />
      </div>

      <div className="product-grid">
        {currentProducts.map(p => (
          <div key={p.id} className="product-card">
            <h3>{p.ten}</h3>
            <p><strong>Danh mục:</strong> {p.danhMuc}</p>
            <p className="price">{p.gia.toLocaleString()} VNĐ</p>
            <p>Kho: {p.soLuong}</p>
            <div className="actions">
              <Link to={`/products/${p.id}`} className="btn btn-info">Xem</Link>
              <Link to={`/edit/${p.id}`} className="btn btn-warning">Sửa</Link>
              <button onClick={() => handleDelete(p.id)} className="btn btn-danger">Xóa</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Previous</button>
        <span>Trang {currentPage}/{totalPages || 1}</span>
        <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;