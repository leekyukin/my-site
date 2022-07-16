import './App.css';
import Header from "./component/Header";
import Menu from "./component/Menu";
import {useState} from "react";
import {MenuContext} from "./context/MenuContext";
import Home from "./component/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SNS from "./component/pages/SNS";
import Blog from "./component/pages/Blog";
import Introduction from "./component/pages/Introduction";
import Project from "./component/pages/Project";
import Books from "./component/pages/Books";

function App() {

  let [menu, setMenu] = useState(false);

  return (
    <BrowserRouter >
      <div className="App">
          <MenuContext.Provider value={{menu, setMenu}}>
            <Header/>
            <Menu/>
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/introduction" element={<Introduction />}/>
              <Route path="/books" element={<Books />}/>
              <Route path="/project" element={<Project />}/>
              <Route path="/sns" element={<SNS />}/>
              <Route path="/blog" element={<Blog />}/>
            </Routes>
          </MenuContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
