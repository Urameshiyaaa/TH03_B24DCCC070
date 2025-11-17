import React from 'react';

interface Props {
  onCategoryChange: (val: string) => void;
  onMinPriceChange: (val: number) => void;
  onMaxPriceChange: (val: number) => void;
}

const Filter: React.FC<Props> = ({onCategoryChange, onMinPriceChange, onMaxPriceChange}) => {
  return(
    <div className="filter-container">
      <div className="control-group">
        <label>Danh mục:</label>
        <select onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">Tất cả</option>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>
      </div>
      <div className="control-group">
        <label>Giá từ:</label>
        <input type="number" placeholder="Min" onChange={(e) => onMinPriceChange(Number(e.target.value))}/>
      </div>
      <div className="control-group">
        <label>Đến:</label>
        <input type="number" placeholder="Max" onChange={(e) => onMaxPriceChange(Number(e.target.value))}/>
      </div>
    </div>
  );
};

export default Filter;