import React from 'react';

const About = ({ imageUrl, aboutText }) => {
  const defaultImageUrl = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageUrl || defaultImageUrl} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;