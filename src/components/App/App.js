import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Main from "../Main/Main";
import SideBar from "../SideBar/SideBar";
import footerImg from '../../images/footer.png'


function App() {
  
  return (
    <BrowserRouter basename="/cripto-hunter">
    <div className="page">
      <SideBar />
        <div className="body">
          <div className="content-box">
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route />
              <Route />
            </Routes>
          </div>
        </div>
        <footer className="footer">
          <img src={footerImg} alt="footer" className="footer__image"/>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;