import React from 'react';
import cartIcon from '../IMG/cartIcon.webp';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <img src={cartIcon} alt="Cart Icon" style={{ width: '30px', marginRight: '5px' }} />
      <span className="badge bg-secondary ms-2">1</span>
    </div>
  );
};

export default CartWidget;
