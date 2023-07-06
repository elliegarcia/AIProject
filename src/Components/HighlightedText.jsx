import React from 'react';

const HighlightedText = ({ text, highlight }) => {
  const parts = text.split(highlight);
  return (
    <pre>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== parts.length - 1 && <mark>{highlight}</mark>}
        </React.Fragment>
      ))}
    </pre>
  );
};

export default HighlightedText;
