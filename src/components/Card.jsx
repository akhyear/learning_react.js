import React from 'react';

function Card({ title, content, onAction }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      maxWidth: '300px',
      margin: '0.5rem'
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={onAction}>
        Do Action
      </button>
    </div>
  );
}

export default Card;
