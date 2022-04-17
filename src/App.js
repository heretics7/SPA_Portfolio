import Header from "./component/Header";
import Main from "./component/Main";
import Process from "./component/Process";
import About from "./component/About";
import Project from "./component/Project";
//import Preinterview from "./component/Preinterview";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div id="portfolio">
      {/* Header */}
      <Header styletype='d1'></Header>
      {/* About */}
      <Main styletype='tag'></Main>
      {/* Ability */}
      <About styletype='null'></About>
      {/* Process */}
      <Process styletype='black'></Process>
      {/* Project */}
      <Project styletype='null'></Project>
      {/*<Preinterview></Preinterview>*/}
      {/* Contact */}
      <Contact styletype='null'></Contact>
      {/* Footer */}
      <Footer styletype='family'></Footer>
    </div>
  );
}

export default App;