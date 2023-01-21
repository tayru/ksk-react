const Parking = () => (
	<main className="page7">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-parking__title">Организация парковки и КПП</h1>
				<div className="divider">
					<img src="/img/divider-white.svg" alt="">
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/img/service-parking.jpg" alt="cover">
			</div>
		</div>

		<div className="service-parking">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="img/stars.svg" alt="">
						</div>
						<div className="service-parking__text">
							Парковка, наряду с другими координационными моментами, занимает важнейшее место в создании
							хорошего впечатления от Вашего мероприятия. <br><br>
							Организация парковки компанией <span>KSK PEOPLE</span> избавит от проблем отсутствия
							парковочных мест и въезда на стоянку — гость беспрепятственно припаркуется и отправится на
							мероприятие.
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="services__buttons">
			<button type="submit" className="btn btn-default mb-3 button2">Список услуг</button>
			<button type="submit" className="btn btn-default mb-3 button1">Заказать</button>
		</div>


	</main>

)
	
	export default Parking;