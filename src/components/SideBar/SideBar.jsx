import './SideBar.scss'

import { useNavigate } from 'react-router-dom'

import menuIcon from '../../images/menuBtn.png'
import homeIcon from '../../images/homeBtn.png'
import supportIcon from '../../images/supportBtn.png'

function SideBar({onBarClick, isMenuOpen}) {

  return (
    <nav className={`side-bar ${isMenuOpen ? 'side-bar_hidden' : ''}`} onClick={onBarClick}>
      <div className="side-bar__button" style={{backgroundImage: `url(${menuIcon})`}}/>
    </nav>
  )
}

export default SideBar;