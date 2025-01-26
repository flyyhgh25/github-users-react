import Content from "./Content";
import "./index.css";
import Nav from "./Navigation";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Content/>
      </main>
    </>
  );
}

export default App;
