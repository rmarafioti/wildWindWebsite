import "./media.css";
import { Link } from "react-router-dom";

export default function Media() {
  return (
    <main id="media">
      <h1 id="mediaHeader">MEDIA</h1>
      <h3 className="mediaHeader">
        Harley-Davidson <b className="targetText">X</b> Wild Wind Tattoo
      </h3>
      <div className="mediaContainer">
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gWt24-_mfKw?si=tpjIjcs4mNcHqOw4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h3 className="mediaHeader">
        Breakfast for Dinner <b className="targetText">X</b> Wild Wind Tattoo{" "}
        <b className="targetText">X</b> At-Bay
      </h3>
      <div className="mediaContainer" id="mediaContainerBottom">
        <img
          id="atBayPhoto"
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1719755434/wildWindSite/atBayCampaign_osd2gw.jpg"
          alt="photoof At-Bay campaign"
        ></img>
        <iframe
          className="video"
          id="videoBottom"
          width="560"
          height="315"
          src="https://res.cloudinary.com/dzpne110u/video/upload/v1719756420/wildWindSite/BFD_AT_BAY_MATCHING_TATTOOS_CARDS_15s_16x9_1080P_H264_ym3g3y.mp4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div id="mediaLinksContainer">
        <Link to="/reviews" className="mediaLinks">
          <h3>Reviews</h3>
        </Link>
        <Link to="/shop" className="mediaLinks">
          <h3>About</h3>
        </Link>
      </div>
    </main>
  );
}
