import './SideMenu.scss'

import { useNavigate } from 'react-router-dom'

import menuTitle from '../../images/menu.png'
import shopIcon from '../../images/shopIcon.png'
import homeIcon from '../../images/homeBtn.png'
import supportIcon from '../../images/supportBtn.png'

function SideMenu({onMenuClick, isMenuOpen, }) {
  const navigate = useNavigate();

  function handelSupportClick() {
    navigate('/support', {replace: true})
    onMenuClick()
  }

  function handleHomeClick() {
    navigate('/', {replace: true})
    onMenuClick()
  }

  return (
    <nav className={`side-menu ${isMenuOpen ? '' : 'side-menu_hidden'}`}>
      <img src={menuTitle} alt="" className="side-menu__title" onClick={onMenuClick} />
      <div className="side-menu__link" onClick={handleHomeClick}>
        <img src={homeIcon} alt="" className="side-menu__link-icon" />
        <span className="side-menu__link-name">principal</span>
      </div>
      <div className="side-menu__link">
        <img src={shopIcon} alt="" className="side-menu__link-icon" />
        <span className="side-menu__link-name">comprar ahora</span>
      </div>
      <div className="side-menu__link" onClick={handelSupportClick}>
        <img src={supportIcon} alt="" className="side-menu__link-icon" />
        <span className="side-menu__link-name">soporte</span>
      </div>
    </nav>
  )
}

export default SideMenu;