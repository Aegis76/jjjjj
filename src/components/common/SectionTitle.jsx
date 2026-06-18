import React from 'react';
import '../../styles/SectionTitle.css';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-title ${align}`}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default SectionTitle;
