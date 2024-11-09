import React from 'react';

// Images
import image1 from '../img/blog-image-1.jpg';
import image2 from '../img/blog-image-2.jpg';

function Article({ date, title, imageSrc, description }) {
  const images = {
    'blog-image-1.jpg': image1,
    'blog-image-2.jpg': image2,
  };

  return (
    <article>
      <h3>{date}</h3>
      <h4>{title}</h4>
      <img src={images[imageSrc]} alt={title} />
      <p>{description}</p>
      <a href="#" className="continue-link">Continues...</a>
    </article>
  );
}

export default Article;
