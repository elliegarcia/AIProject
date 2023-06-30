import React from 'react';

const HighlightedText = ({ text, highlight }) => {
  const parts = text.split(highlight);
  return (
    <p>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== parts.length - 1 && <mark>{highlight}</mark>}
        </React.Fragment>
      ))}
    </p>
  );
};

export default HighlightedText;
