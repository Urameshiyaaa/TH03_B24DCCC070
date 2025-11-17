import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useProductContext} from '../context/ProductContext';
import type {Product} from '../types';

const ProductForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {state, dispatch} = useProductContext();
  const isEdit = Boolean(id);

  const [form, setForm] = useState<Product>({
    id: 0, 
    ten: '', 
    danhMuc: 'Khác',
    gia: 0, 
    soLuong: 0, 
    moTa: ''
  });
  
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit && id){
      const product = state.products.find(p => p.id === Number(id));
      if (product) setForm(product);
    }
  }, [id, isEdit, state.products]);

  const validate = () => {
    if (form.ten.length < 3) return "Tên phải tối thiểu 3 ký tự";
    if (form.gia <= 0) return "Giá phải lớn hơn 0";
    if (form.soLuong <= 0 || !Number.isInteger(form.soLuong)) return "Số lượng phải là số nguyên dương";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err){
      setError(err);
      return;
    }

    if (isEdit){
      dispatch({ type: 'UPDATE_PRODUCT', payload: form });
    } 
    else{
      dispatch({ type: 'ADD_PRODUCT', payload: { ...form, id: Date.now() } });
    }
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{isEdit ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h2>
      {error && <div className="error-msg">{error}</div>}
      <form onSubmit={handleSubmit} className="form-layout">
        <div className="form-group">
          <label>Tên sản phẩm:</label>
          <input value={form.ten} onChange={e => setForm({...form, ten: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Danh mục:</label>
          <select value={form.danhMuc} onChange={e => setForm({...form, danhMuc: e.target.value as any})}>
            <option value="Điện tử">Điện tử</option>
            <option value="Quần áo">Quần áo</option>
            <option value="Đồ ăn">Đồ ăn</option>
            <option value="Sách">Sách</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="form-group">
          <label>Giá:</label>
          <input type="number" value={form.gia} onChange={e => setForm({...form, gia: Number(e.target.value)})} />
        </div>
        <div className="form-group">
          <label>Số lượng:</label>
          <input type="number" value={form.soLuong} onChange={e => setForm({...form, soLuong: Number(e.target.value)})} />
        </div>
        <div className="form-group">
          <label>Mô tả:</label>
          <textarea value={form.moTa} onChange={e => setForm({...form, moTa: e.target.value})} />
        </div>
        <button type="submit" className="btn btn-primary">Lưu</button>
        <button type="button" onClick={() => navigate('/')} className="btn">Hủy</button>
      </form>
    </div>
  );
};

export default ProductForm;