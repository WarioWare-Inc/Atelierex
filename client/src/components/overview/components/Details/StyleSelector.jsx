/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import StylePhoto from './StylePhoto';

function StyleSelector(
  {
    productStyles, selectedStyle, setSelectedStyle, setSelectedPhoto, setSelectedThumb,
  },
) {
  return (
    <div className="styleSelector">
      <div className="selectedStyleName">{selectedStyle.name}</div>
      <div className="productStyles">
        {productStyles.map((style) => (
          <StylePhoto
            key={style.style_id}
            style={style}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            setSelectedPhoto={setSelectedPhoto}
            setSelectedThumb={setSelectedThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
