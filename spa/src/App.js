import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import About from "./component/About";
import ProcessList from "./component/ProcessList";
//import ProjectList from "./component/ProjectList";
import Swiper from "./component/Swiper";
import ContactList from "./component/ContactList";
import ContactInsert from "./component/ContactInsert";
import Footer from "./component/Footer";

function App() {
  return (
    <div id="portfolio">
      <Header styletype='d1'></Header>
      <Main styletype='tag'></Main>
      <About dbinfo={ {         
        titlenm : 'Skill', 
        botable : 'skill',
        crud : 'select',
        mapper : 'portfolioSQL',
        mapperid : 'skillList'
        }}>
      </About>
      <ProcessList dbinfo={ {         
        titlenm : 'Process', 
        botable : 'process',
        crud : 'select',
        mapper : 'portfolioSQL',
        mapperid : 'processList'
        }}>
      </ProcessList>
      {/*
      <ProjectList  dbinfo={ {         
        titlenm : 'Project', 
        botable : 'project',
        crud : 'select',
        mapper : 'portfolioSQL',
        mapperid : 'projectList'
        }}>
      </ProjectList>
      */}
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
      <Footer styletype='family'></Footer>
    </div>
  );
}

export default App;