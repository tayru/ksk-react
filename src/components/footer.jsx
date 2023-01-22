import {Link} from "react-router-dom";

const Footer = () => (
<footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col footer__logo">
                <img className="footer__logo-img" src="/static/img/a33aeb74-0815-48b0-9c67-abad44ec9999.png" alt=""/>
								
            </div>
            <div className="col footer__text">
                Ваши заботы – наша работа!
								<div className="col copyright">
								© 2023 KSK People 
						</div>
            </div>
					
            <div className="col footer__contacts">
                <div className="footer__phone">
                    <a href="tel:+79309153808">+7 (930) 915-38-08</a>  <img className="phone__image" src="/static/img/Call-2.svg" alt=""/> 
                </div>
                <div className="footer__mail">
                  info@kskpeople.com  <img className="mail__image" src="/static/img/Mail.svg" alt=""/>
                </div>
            </div>
        </div>
    </div>
</footer>
    )

export default Footer
