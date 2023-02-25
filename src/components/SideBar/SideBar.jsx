import './SideBar.scss'

import { useNavigate } from 'react-router-dom'

import menuIcon from '../../images/menuBtn.png'
import homeIcon from '../../images/homeBtn.png'
import supportIcon from '../../images/supportBtn.png'

function SideBar({onBarClick}) {

  return (
    <nav className="side-bar" onClick={onBarClick}>
      <div className="side-bar__button" style={{backgroundImage: `url(${homeIcon})`}}/>
      <div className="side-bar__button" style={{backgroundImage: `url(${menuIcon})`}}/>
      <div className="side-bar__button" style={{backgroundImage: `url(${supportIcon})`}}/>
    </nav>
  )
}

export default SideBar;