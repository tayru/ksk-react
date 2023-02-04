import { Link } from "react-router-dom";

const Parking = () => (
	<main className="page7">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-parking__title">Организация парковки и КПП</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/service-parking.jpg" alt="cover"/>
			</div>
		</div>

		<div className="service-parking">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="service-parking__text">
							Парковка, наряду с другими координационными моментами, занимает важнейшее место в создании
							хорошего впечатления от Вашего мероприятия. <br/><br/>
							Организация парковки компанией <span>KSK PEOPLE</span> избавит от проблем отсутствия
							парковочных мест и въезда на стоянку — гость беспрепятственно припаркуется и отправится на
							мероприятие.
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
	
	export default Parking;