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
      </Helmet>
      <h1>TATTOOS</h1>
      <Link to="/richtats">
        <h3>Rich Marafioti</h3>
      </Link>
      <Link to="/mercedestats">
        <h3>Mercedes Wright</h3>
      </Link>
    </main>
  );
}
