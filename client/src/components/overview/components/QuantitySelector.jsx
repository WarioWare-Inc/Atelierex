import React, { useEffect, useState } from 'react';

function QuantitySelector({
  selectedStyle, selectedSize, skusNull, setSkusNull,
}) {
  const [productQuantity, setProductQuantity] = useState(0);
  const [allQuantities, setAllQuantites] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  useEffect(() => {
    if (Object.keys(selectedStyle).length > 0) {
      const skus = Object.entries(selectedStyle.skus);
      for (let i = 0; i < skus.length; i += 1) {
        if (skus[i][1].size === selectedSize) {
          setProductQuantity(() => skus[i][1].quantity);
        }
      }
    }
  }, [selectedSize]);

  useEffect(() => {
    setAllQuantites([]);
    for (let i = 1; i <= productQuantity; i += 1) {
      setAllQuantites((currentQuantites) => [...currentQuantites, i]);
    }
  }, [productQuantity]);

  if (skusNull) {
    return '';
  }

  return (
    <div className="quantitySelector">
      <select
        value={selectedQuantity}
        onChange={(e) => setSelectedQuantity(e.target.value)}
      >
        <option value="value">0</option>
        {allQuantities.map((quantity) => (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QuantitySelector;
