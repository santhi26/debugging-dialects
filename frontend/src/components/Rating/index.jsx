import { useState } from 'react';

function getRatingDescription(rating) {
  switch (rating) {
    case 1:
      return 'Poor';
    case 2:
      return 'Nothing special';
    case 3:
      return 'Average';
    case 4:
      return 'Very good';
    case 5:
      return 'Excellent';
    default:
      return 'None';
  }
}

export default function StarRating() {
  const [rating, setRating] = useState(3);
  const [hoveredRating, setHoveredRating] = useState(1);

  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleRatingClick = (value) => {
    setRating(value);
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
      <div>
        <div>{`Selected: ${getRatingDescription(rating)}`}</div>
        <div>{`${getRatingDescription(hoveredRating)}`}</div>
      </div>
    </div>
  );
}
