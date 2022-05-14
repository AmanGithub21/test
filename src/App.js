import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Feature from "./Feature";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Gradiant from "./Gradiant";

function App() {
  return (
    <div className="App">
      <div className="useless">
        <a href="/">Click to go to home page</a>
      </div>
      <h2 className="title">GET 10% OFF</h2>
      <Navbar />
      <Feature />
      <Feature2 />
      <Feature3 />
      <div className="data-box">
        <Gradiant
          className="gradiant"
          bgcolor="black"
          color="white"
          isGradiant={false}
        />
        <Gradiant
          className="gradiant"
          bgcolor="#DCD859"
          color="black"
          isGradiant={true}
        />
        <Gradiant
          className="gradiant"
          bgcolor="pink"
          color="black"
          isGradiant={true}
        />
      </div>
    </div>
  );
}

export default App;
