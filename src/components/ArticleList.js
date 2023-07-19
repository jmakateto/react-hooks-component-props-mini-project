import React from 'react';
import Article from './Article';
import blogData from '../data/blog';

const ArticleList = () => {
  return (
    <main>
      {blogData.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;