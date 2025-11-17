import {useParams, useNavigate} from 'react-router-dom';
import {useProductContext} from '../context/ProductContext';

const ProductDetail = () => {
  const {id} = useParams();
  const {state} = useProductContext();
  const navigate = useNavigate();
  
  const product = state.products.find(p => p.id === Number(id));

  if (!product) return <div className="container">Không tìm thấy sản phẩm</div>;
  return (
    <div className="container">
      <h2>Chi tiết sản phẩm</h2>
      <div className="detail-card">
        <h3>{product.ten} (ID:{product.id})</h3>
        <p><strong>Danh mục:</strong>{product.danhMuc}</p>
        <p><strong>Giá:</strong>{product.gia.toLocaleString()}VNĐ</p>
        <p><strong>Số lượng tồn:</strong>{product.soLuong}</p>
        <p><strong>Mô tả:</strong>{product.moTa}</p>
        <button onClick={() => navigate('/')} className="btn btn-primary">Quay lại</button>
      </div>
    </div>
  );
};

export default ProductDetail;