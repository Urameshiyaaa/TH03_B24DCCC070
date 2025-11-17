import React from 'react';

interface Props {onSearch: (val: string) => void;}

const SearchBar: React.FC<Props> = ({onSearch}) => {
  return (
    <div className="control-group">
      <label>Tìm kiếm:</label>
      <input 
        type="text" 
        placeholder="Nhập tên sản phẩm..." 
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;