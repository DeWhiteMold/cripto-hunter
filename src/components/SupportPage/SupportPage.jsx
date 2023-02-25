import './SupportPage.scss'
import titleImg from '../../images/supportTitle.png'
import mailIcon from '../../images/mailIcon.png'
import instIcon from '../../images/instagramIcon.png'
import facebIcon from '../../images/facebookIcon.png'
import twIcon from '../../images/twitterIcon.png'
import tgIcon from '../../images/telegrammIcon.png'

function SupportPage() {
  return (
    <main className="support">
      <img src={titleImg} alt="" className="support__title" />
      <p className="support__description">description</p>
      <div className="support__links">
        <a href="#" className="support__link">
          <img src={mailIcon} alt="" className="support__link-icon" />
        </a>
        <a href="#" className="support__link">
          <img src={instIcon} alt="" className="support__link-icon" />
        </a>
        <a href="#" className="support__link">
          <img src={facebIcon} alt="" className="support__link-icon" />
        </a>
        <a href="#" className="support__link">
          <img src={twIcon} alt="" className="support__link-icon" />
        </a>
        <a href="#" className="support__link">
          <img src={tgIcon} alt="" className="support__link-icon" />
        </a>
      </div>
    </main>
  )
}

export default SupportPage;