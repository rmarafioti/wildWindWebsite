import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./styles/tattoo.css";

/**
 *
 * @component Tattoos features links to tattoo artist pages
 */
export default function Tattoos() {
  return (
    <main id="tattoos">
      <Helmet>
        <title>Tattoos Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the tattoos page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/tattoos" />
      </Helmet>
      <h1 id="tattooHeader">TATTOOS</h1>
      <ul>
        <li className="missionItem">Variety</li>
        <li className="missionItem">Comfort</li>
        <li className="missionItem">Professionalism</li>
      </ul>
      <p className="shopMiddleParagraphs">
        You can expect to be treated with respect and care at WWT. We will
        communicate all aspects of your tattoo experience, from consultation to
        caring for your new tattoo.
      </p>
      <p className="shopMiddleParagraphs">
        We offer various tattoo styles, from small walk-ins to larger custom
        pieces. Have something in mind? Just ask!
      </p>
      <p className="shopMiddleParagraphs" id="bottomParagrah">
        Our community is important to us. We are here to give you the tattoo you
        want in an inclusive, safe space. While you get tattooed, enjoy a clean,
        creative, and artistic environment.
      </p>
      <h1 id="artistHeader">Our Artists</h1>
      <div id="artistLinksContainer">
        <Link to="/richtats" className="artistLink">
          <h3>Rich Marafioti</h3>
        </Link>
        <Link to="/mercedestats" className="artistLink">
          <h3>Mercedes Wright</h3>
        </Link>
      </div>
    </main>
  );
}
