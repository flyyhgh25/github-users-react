import Content from "./Content";
import { socials } from "./data";
import Footer from "./Footer";
import "./index.css";
import Nav from "./Navigation";

function App() {
  const url = "/users";
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Content url={url} />
      </main>
      <Footer socials={socials} />
    </>
  );
}

export default App;
