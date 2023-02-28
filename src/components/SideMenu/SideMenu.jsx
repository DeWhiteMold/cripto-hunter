import './SideMenu.scss'

import { useNavigate } from 'react-router-dom'

import menuTitle from '../../images/menu.png'
import menuIcon from '../../images/menuBtn.png'
import homeIcon from '../../images/homeBtn.png'
import supportIcon from '../../images/supportBtn.png'

function SideMenu({onMenuClick, isMenuOpen}) {
  const navigate = useNavigate();

  function handelSupportClick() {
    navigate('/support', {replace: true})
  }

  function handleHomeClick() {
    navigate('/', {replace: true})
  }

  return (
    <nav className={`side-menu ${isMenuOpen ? '' : 'side-menu_hidden'}`}>
      <img src={menuTitle} alt="" className="side-menu__title" onClick={onMenuClick} />
      <div className="side-menu__link" onClick={handleHomeClick}>
        <img src={homeIcon} alt="" className="side-menu__link-icon" />
        <span className="side-menu__link-name">home</span>
      </div>
      <div className="side-menu__link">
        <img src={menuIcon} alt="" className="side-menu__link-icon" />
        <span className="side-menu__link-name">text</span>
      </div>
      <div className="side-menu__link" onClick={handelSupportClick}>
        <img src={supportIcon} alt="" className="side-menu__link-icon" />
        <span className="side-menu__link-name">support</span>
      </div>
    </nav>
  )
}

export default SideMenu;