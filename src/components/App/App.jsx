import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Main from "../Main/Main";
import SupportPage from "../SupportPage/SupportPage";
import BuyPage from "../BuyPage/BuyPage";
import SideBar from "../SideBar/SideBar";
import SideMenu from "../SideMenu/SideMenu";
import footerImg from '../../images/footer.png'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBuyPageOpen, setIsBuyPageOpen] = useState(false);
  function handleMenuSwich() {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleBuyPageOpen() {
    setIsBuyPageOpen(true);
  }

  function handleSwichPage() {
    setIsBuyPageOpen(false)
  }
  
  return (
    <BrowserRouter basename="/cripto-hunter">
    <div className="page">
      <div className="background"></div>
          <SideMenu isMenuOpen={isMenuOpen} onMenuClick={handleMenuSwich} /> 
          <SideBar isMenuOpen={isMenuOpen} onBarClick={handleMenuSwich} />
        <div className={`body ${isBuyPageOpen ? 'body_wide' : ''}`}>
          <div className="content-box">
            <Routes>
              <Route path='/' element={<Main onOpen={handleSwichPage} />}/>
              <Route path='/support' element={<SupportPage onOpen={handleSwichPage} />}/>
              <Route path='/buy' element={<BuyPage onOpen={handleBuyPageOpen} />}/>
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