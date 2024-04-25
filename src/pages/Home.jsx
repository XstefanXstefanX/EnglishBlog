import React from "react";
import PageName from "../components/PageName";

const Home = () => {
  return (
    <div>
      <PageName name="GreenRipple" />
      <div className="welcome-page-container">
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
            __Here, we believe in the power of small actions to make a big
            difference. Whether you're a seasoned environmental enthusiast or
            just starting your journey towards sustainability, you'll find
            inspiration, tips, and resources to help you play your part in
            preserving our beautiful Earth.
          </p>
          <img
            src="https://images.unsplash.com/photo-1498925008800-019c7d59d903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="forest-image"
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
