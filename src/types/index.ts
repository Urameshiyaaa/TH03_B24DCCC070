export interface Product {
  id: number;
  ten: string;
  danhMuc: 'Điện tử'|'Quần áo'|'Đồ ăn'|'Sách'|'Khác';
  gia: number;
  soLuong: number;
  moTa: string;
}

export type ProductAction =
  | {type: 'ADD_PRODUCT'; payload: Product}
  | {type: 'UPDATE_PRODUCT'; payload: Product}
  | {type: 'DELETE_PRODUCT'; payload: number};

export interface ProductState {products: Product[];}

export const initialProducts: Product[] = [
  {id: 1, ten: 'iPhone 15 Pro', danhMuc: 'Điện tử', gia: 25000000, soLuong: 10, moTa: 'Titan tự nhiên'},
  {id: 2, ten: 'Áo Thun Basic', danhMuc: 'Quần áo', gia: 150000, soLuong: 50, moTa: 'Cotton 100%'},
  {id: 3, ten: 'MacBook Air M1', danhMuc: 'Điện tử', gia: 18000000, soLuong: 5, moTa: 'Màu Gold'},
  {id: 4, ten: 'Harry Potter', danhMuc: 'Sách', gia: 300000, soLuong: 20, moTa: 'Full bộ'},
  {id: 5, ten: 'Cơm cháy', danhMuc: 'Đồ ăn', gia: 50000, soLuong: 100, moTa: 'Siêu cay'},
  {id: 6, ten: 'Samsung S24', danhMuc: 'Điện tử', gia: 20000000, soLuong: 8, moTa: 'AI Phone'},
  {id: 7, ten: 'Quần Jeans', danhMuc: 'Quần áo', gia: 400000, soLuong: 15, moTa: 'Slim fit'},
  {id: 8, ten: 'Bánh tráng trộn', danhMuc: 'Đồ ăn', gia: 20000, soLuong: 200, moTa: 'Long An'},
  {id: 9, ten: 'Nhà Giả Kim', danhMuc: 'Sách', gia: 80000, soLuong: 30, moTa: 'Paulo Coelho'},
  {id: 10, ten: 'Tai nghe Sony', danhMuc: 'Điện tử', gia: 2500000, soLuong: 12, moTa: 'Chống ồn'},
  {id: 11, ten: 'Vở học sinh', danhMuc: 'Khác', gia: 10000, soLuong: 500, moTa: '96 trang'}
];