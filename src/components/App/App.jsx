import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Main from "../Main/Main";
import SupportPage from "../SupportPage/SupportPage";
import SideBar from "../SideBar/SideBar";
import SideMenu from "../SideMenu/SideMenu";
import footerImg from '../../images/footer.png'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuSwich() {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <BrowserRouter basename="/cripto-hunter">
    <div className="page">
          <SideMenu isMenuOpen={isMenuOpen} onMenuClick={handleMenuSwich}/> : 
          <SideBar isMenuOpen={isMenuOpen} onBarClick={handleMenuSwich} />
        <div className="body">
          <div className="content-box">
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/support' element={<SupportPage />}/>
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