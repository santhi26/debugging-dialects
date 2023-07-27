import { useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(3);
  const [hoveredRating, setHoveredRating] = useState(3);

  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(3);
  };

  const handleRatingClick = (value) => {
    setRating(value);
    setHoveredRating(value)
  };

  return (
    <div style={{ maxWidth: 180, width: '100%' }}>
      <div style={{ fontSize: 25 }}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            style={{
              cursor: 'pointer',
              color: value <= (hoveredRating || rating) ? 'gold' : 'gray'
            }}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleRatingClick(value)}
          >
            ★
          </span>
        ))}
      </div>
     
    </div>
  );
}
