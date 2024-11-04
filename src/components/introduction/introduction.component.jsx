import React from 'react';
import { useNavigate } from 'react-router-dom';
import './introduction.style.scss';

const Introduction = ({ imagesrc, text, actionUri }) => {
  const navigate = useNavigate();
  return (
    <div className="item" onClick={() => navigate(`${actionUri}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imagesrc})`,
        }}
      />

      <h3 className="text">{text.toUpperCase()}</h3>
    </div>
  );
};

export default Introduction;
