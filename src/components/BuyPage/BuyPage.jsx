import './BuyPage.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supportImg from '../../images/supportTitle.png'
import priceGif from '../../images/price.GIF'
import shopIcon from '../../images/shopIcon.png'
import captionIcon from '../../images/caption.png'
import copyIcon from '../../images/copy-icon.svg' 
import buyPageCards from './BuyPageData'

function BuyPage({onOpen}) {
  const navigate = useNavigate();

  const [isCapOpen, setIsCapOpen] = useState(false);

  function handleCaptionClick() {
    setIsCapOpen((state) => !state);
  }

  function handleCopy(code) {
    navigator.clipboard.writeText(code);
  }

  function handleSupportClick() {
    navigate('/support', {replace: true})
  }

  useEffect(() => {
    onOpen();
  })

  return(
    <section className='buy-page'>
      <div className="buy-page__header">
        <div className="buy-page__header-text">
          <h2 className="buy-page__header-title">COMPRAR AHORA</h2>
          <p className="buy-page__header-caption">
            No olvides tomar un pantallazo o hacer captura de pantalla en 
            vídeo al comprobar el pago. Eso va a servir del comprobante de 
            tu compra, ¡para que luego puedas obtener el contenido!
          </p>
        </div>
        <img src={shopIcon} alt="" className="buy-page__header-icon" />
        <img src={priceGif} alt="" className="buy-page__header-price" />
      </div>
      <div className="buy-page__main">
        <span className='buy-page__span'>ELIJA UN MÉTODO DE PAGO</span>
        <div className="buy-page__cards">
          {
            buyPageCards.map((card) => {
              return (
                <div className="buy-page__card" key={card.code}>
                  <img src={card.icon} alt="" className="buy-page__card-icon" />
                  <div className={`buy-page__card-code-box ${card.border ? 'buy-page__card-code-box_bordered' : ''}`}>
                    {card.link ?
                      <a href={card.link} className='buy-page__card-code'>{card.code}</a> : 
                      <span className='buy-page__card-code'>
                        {card.code}
                      </span>}
                    {card.copy && <img src={copyIcon} alt="" className='buy-page__card-copy' onClick={() => {handleCopy(card.code)}}/>}
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="buy-page__caption">
          <img src={captionIcon} alt="" className={`buy-page__caption-img ${isCapOpen ? '' : 'buy-page__caption-img_acitve'}`} onClick={handleCaptionClick} />
          <p className={`buy-page__caption-text ${isCapOpen ? '' : 'buy-page__caption-text_hidden'}`}>
          Página de pago del curso.  El pago se realiza mediante la transferencia de fondos a 
          la cuenta de la tarjeta/cuentas de criptomonedas.  Si no tienes una billetera de 
          criptomonedas, también está disponible para ti el pago con tarjeta, o el cambio de 
          dinero tradicional a criptomoneda a nuestra cuenta a través del servicio de mercuryo.  
          Si elige un método de pago con criptomonedas o el exchange de mercurio, solo 
          necesita copiar el número de cualquiera de nuestras billeteras criptográficas y hacer 
          clic en el ícono de la tarjeta, luego todo va a haber simple. Si tiene más preguntas, 
          el líder del curso le proporcionará información de pago más detallada en el video de 
          instrucciones.  Si algo no funciona, por favor envíenos un correo electrónico!
          </p>
        </div>
        <div className="buy-page__help">
          <div className="buy-page__video-box">
            <span className="buy-page__video-title">MERCURYO INSTRUCCIÓN EN VÍDEO</span>
            <iframe id="ytplayer" type="text/html" width="300" height="168.75"
            src="https://www.youtube.com/embed/N0VuWjkOTqI"
            frameborder="0" allowfullscreen />
          </div>
          <p className="buy-page__help-text">
            DESPUÉS DE PAGAR NO OLVIDES HACER UNA CAPTURA DE PANTALLA DEL PAGO Y ENVIARLA AL 
            SERVICIO DE SOPORTE PARA RECIBIR EL CONTENIDO!
          </p>
          <div className="buy-page__help-support-box">
            <img src={supportImg} alt="" className="buy-page__help-support" onClick={handleSupportClick}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyPage;