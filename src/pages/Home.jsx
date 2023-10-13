import React from "react";

const Home = () => {
  return (
    <div className="welcome-page-container">
      <div className="motto">
        "Cherish, Conserve, Change: Nurturing Our Planet for a Sustainable
        Tomorrow."
      </div>
      <section id="welcome">
        <h1 className="heading">Save The Earth Today With Us...</h1>
        <p className="text-styling">
          "Cherish, Conserve, Change: Nurturing Our Planet for a Sustainable
          Tomorrow."
        </p>
      </section>
      <section id="our-mission">
        <h1 className="heading">Our Mission</h1>
        <p className="text-styling">
          The content of your blog's welcome page should serve as an
          introduction to your blog and give visitors a clear idea of what they
          can expect. Here are some elements and information you might consider
          including on your blog's welcome page:
        </p>
        <img
          src="https://images.unsplash.com/photo-1498925008800-019c7d59d903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          alt="forest-image"
        />
      </section>
    </div>
  );
};

export default Home;
