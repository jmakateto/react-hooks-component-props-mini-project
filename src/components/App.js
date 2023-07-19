import React from "react";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

const App = () => {
  const blogName = "Your Blog Name";
  const imageUrl = "https://via.placeholder.com/215";
  const aboutText = "This is your blog's about section.";

  return (
    <div>
      <Header blogName={blogName} />
      <About imageUrl={imageUrl} aboutText={aboutText} />
      <ArticleList />
    </div>
  );
};


export default App;
