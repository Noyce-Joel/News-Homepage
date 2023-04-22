import Image from "next/image";
import React from "react";
import Retro from "public/images/image-retro-pcs.jpg";
import RetroLaptop from "public/images/image-top-laptops.jpg";
import RetroGaming from "public/images/image-gaming-growth.jpg";
function grid() {
  return (
    <div className="grid">
      <div className="row long"></div>
      <div className="row tall">
        <h1>NEW</h1>

        <b>Hydrogen VS Electric Cars</b>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <div className="line" />
        <b>The Downsides of AI Artistry</b>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <div className="line" />
        <b>Is VC Funding Drying Up?</b>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
      <div className="row popular">The Bright Future of Web 3.0?</div>
      <div className="pop-description">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?{" "}
        </p>
        <a>
          <button class="btn">READ MORE</button>
        </a>
      </div>

      <div className="row trending">
        <Image src={Retro} alt="retro-pc" width={140} />

        <div className="trend">
          <b>01</b>
          <h3>Reviving Retro</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="row trending">
        <Image src={RetroLaptop} alt="retro-pc" width={140} />
        <div className="trend">
          <b>02</b>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="row trending">
        <Image src={RetroGaming} alt="retro-pc" width={140} />
        <div className="trend">
          <b>03</b>
          <h3>The Growth Of Gaming</h3>
          <p>How the pandemic sparked new oportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default grid;
