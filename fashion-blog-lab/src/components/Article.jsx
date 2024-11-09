import React from 'react';

function Article({ date, title, imageSrc, description }) {
  return (
    <article>
      <h3>{date}</h3>
      <h4>{title}</h4>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
      <a href="#" className="continue-link">Continues...</a>
    </article>
  );
}

export default Article;
