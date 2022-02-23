import React from "react";
import image1 from "../../assets/home1.png";
import image2 from "../../assets/home2.png";
import image3 from "../../assets/home3.svg";
import image4 from "../../assets/home4.png";
import image5 from "../../assets/home5.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-content">
      <div className="home1">
        <img src={image1} alt="home1" />
        <div className="home-paragragh">
          <h3>Never Hire Writers Again</h3>
          <p>
            HOTH Blogger eliminates the need to ever hire writers
            again. With a 1% acceptance rate for new writers, you can
            tap into a large collection of expert blog writers with
            years of experience across different subject matters.
          </p>
        </div>
      </div>
      <div className="home1">
        <div className="home-paragragh">
          <h3>We’ll Post It For You</h3>
          <p>
            We don’t just write the content for you. For WordPress
            users, we can also post the article directly to your blog
            for no additional fee! Not only will we upload the post,
            but we’ll also format it to make sure it looks good and
            we’ll even add a photo to it!
          </p>
        </div>
        <img src={image2} alt="home2" />
      </div>
      <div className="home1">
        <img src={image3} alt="home3" />
        <div className="home-paragragh">
          <h3>Reseller Friendly</h3>
          <p>
            We’ve created a white-label approval hub for both the
            topic and final article approval. Simply send your clients
            the direct white label approval URL for them to approve or
            reject. You can even make changes to the content yourself
            directly.
          </p>
        </div>
      </div>
      <div className="home1">
        <div className="home-paragragh">
          <h3>For the more technical niche, use Article Pro</h3>
          <p>
            Some niches need more experienced writers. With Blogger
            Pro you get access to qualified niche writers who have
            published in your industry and have been vetted by our
            staff to ensure they’re the perfect fit for you.
          </p>
        </div>
        <img src={image4} alt="home4" />
      </div>
    </div>
  );
};

export default Home;
