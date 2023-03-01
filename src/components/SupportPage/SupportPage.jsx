import './SupportPage.scss'
import titleImg from '../../images/supportTitle.png'
import mailIcon from '../../images/mailIcon.png'
import instIcon from '../../images/instagramIcon.png'
import facebIcon from '../../images/facebookIcon.png'
import twIcon from '../../images/twitterIcon.png'
import tgIcon from '../../images/telegrammIcon.png'
import { useState } from 'react'

function SupportPage() {
  const [isCopied, setisCopied] = useState(false);

  function handleMailClick() {
    navigator.clipboard.writeText('romamartinezsoporto@outlook.es');
    setisCopied(true)
  }

  return (
    <main className="support">
      <img src={titleImg} alt="" className="support__title" />
      <p className="support__description">
        Después de la compra, escribe a uno de nuestros equipos de soporte 
        para recibir contenido. El contenido se envía como un archivo ZIP. 
        Si deseas continuar participando en el proyecto, por favor escribe al 
        lugar donde recibió el contenido. Si tienes preguntas adicionales, 
        envía un correo electrónico.
      </p>
      <div className="support__links">
        <a href="#" className="support__link" onClick={handleMailClick}>
          <img src={mailIcon} alt="" className="support__link-icon" />
        </a>
        <a href="https://www.instagram.com/romamartinez_infohunter/" className="support__link">
          <img src={instIcon} alt="" className="support__link-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089487495187" className="support__link">
          <img src={facebIcon} alt="" className="support__link-icon" />
        </a>
        <a href="https://twitter.com/RomaMartinezzz" className="support__link">
          <img src={twIcon} alt="" className="support__link-icon" />
        </a>
        <a href="https://t.me/infohunter_support" className="support__link">
          <img src={tgIcon} alt="" className="support__link-icon" />
        </a>
      </div>
      <span className='copy-alert'>{isCopied && "Copiado al portapapeles"}</span>
    </main>
  )
}

export default SupportPage;