require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const { HelmetProvider } = require("react-helmet-async");
const React = require("react");
const App = require("./src/client/App").default; // Adjust the path according to your project structure

const app = express();
app.use(express.static(path.resolve(__dirname, "../../public")));
app.use(express.json()); // To parse JSON bodies

app.get("/*", (req, res) => {
  const helmetContext = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const indexFile = path.resolve(__dirname, "../../public/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    const html = data
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace(
        /<title>.*<\/title>/,
        `${helmet.title.toString()}${helmet.meta.toString()}`
      );

    return res.send(html);
  });
});

app.listen(4242, () => console.log("Running SSR server on port 4242"));
