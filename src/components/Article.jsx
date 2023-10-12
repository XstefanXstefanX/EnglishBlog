import React from "react";

const articles = [
  {
    id: 1,
    title: "Save The Planet!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
  },
  {
    id: 2,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 3,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 4,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 5,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 6,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 7,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 8,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 9,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
  {
    id: 10,
    title: "Earth Needs You!",
    text: "We don’t have to accept doom and gloom for the Earth. Together, we can slow the dual crises of climate and biodiversity loss. This is a hopeful wake-up call, but only if we act with great urgency.",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
  },
];

const Article = () => {
  return (
    <div className="articles-container">
      {articles.map((article) => {
        return (
          <div className="article-container">
            <h1 className="article-title" key={article.title.toString()}>
              {article.title}
            </h1>
            <p className="article-text" key={article.id.toString()}>
              {article.text}
            </p>
            <img
              className="article-image"
              // Must change this later
              src={article.img}
              alt="article-image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Article;