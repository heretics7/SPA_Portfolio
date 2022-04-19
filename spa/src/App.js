import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Process from "./component/Process";
import About from "./component/About";
// import Project from "./component/Project";
//import Preinterview from "./component/Preinterview";
import Swiper from "./component/Swiper";
import ContactList from "./component/ContactList";
import ContactInsert from "./component/ContactInsert";
// import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div id="portfolio">
      {/* Header */}
      <Header styletype='d1'></Header>
      {/* Main */}
      <Main styletype='tag'></Main>
      {/* About */}
      <About dbinfo={ {         
        titlenm : 'Skill', 
        botable : 'contactList',
        crud : 'select',
        mapper : 'portfolioSQL',
        mapperid : 'skillList'
        }}>
      </About>
      {/* Process */}
      <Process styletype='black'></Process>
      {/* Project */}
      {/* <Project styletype='null'></Project> */}
      {/*<Preinterview></Preinterview>*/}
      <Swiper></Swiper>
      <ContactList dbinfo={ {         
        titlenm : '아마존 Contact 목록', 
        botable : 'contactList',
        crud : 'select',
        mapper : 'portfolioSQL',
        mapperid : 'portfolioList'
        }}>
      </ContactList>
      <Routes>
        <Route path='/' element={
          <ContactInsert dbinfo={{
            titlenm : "Contact",
            botable : "contactWrite",
            crud : "insert",
            mapper : "portfolioSQL",
            mapperid : "portfolioInsert"
          }}>
          </ContactInsert>}>
        </Route>
      </Routes>
      {/* Contact */}
      {/*<Contact></Contact>*/}
      {/* Footer */}
      <Footer styletype='family'></Footer>
    </div>
  );
}

export default App;