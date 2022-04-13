import Header from "./component/Header";
import About from "./component/About";
import Process from "./component/Process";
import Ability from "./component/Ability";
import Project from "./component/Project";
// import Preinterview from "./component/Preinterview";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div id="portfolio">
      {/* Header */}
      <Header styletype='d1'></Header>
      {/* About */}
      <About styletype='tag'></About>
      {/* Process */}
      <Process styletype='black'></Process>
      {/* Ability */}
      <Ability styletype='null'></Ability>
      {/* Project */}
      <Project styletype='null'></Project>
      {/* <Preinterview></Preinterview> */}
      {/* Contact */}
      <Contact styletype='null'></Contact>
      {/* Footer */}
      <Footer styletype='family'></Footer>
    </div>
  );
}

export default App;