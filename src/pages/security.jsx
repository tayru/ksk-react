import { Link } from "react-router-dom";

const Security  = () => (
	<main className="page9">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-security__title animate__animated animate__fadeInRight">Организация безопасности</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/service-security.jpg" alt="cover"/>
			</div>
		</div>

		<div className="service-security">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="service-security__text">
							Организация обеспечения безопасности состоит из проведения: <br/><br/>

							• Проверки (осмотр) соответствующей территории до и после мероприятия <br/>

							• Организации режима контролируемого доступа <br/>

							• Предотвращение провокационных и незаконных действий по отношению к участникам и
							организаторам <br/>

							• Предотвращение попадания на мероприятие запрещенных предметов (веществ) <br/>

							• Установление контакта с правоохранительными органами и их представителями с целью
							осуществления частной охраны гостей и участников мероприятия <br/>

							• Поддержание порядка и безопасности на мероприятии <br/>

							• Охрана собственности гостей и участников мероприятия
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="services__buttons">
		<Link to="/services"><button type="submit" className="btn-default mb-3 button2">Список услуг</button></Link>
		<Link to="/contacts"><button type="submit" className="btn-default mb-3 button1">Заказать</button></Link>
		</div>


	</main>

)
	
	export default Security ;