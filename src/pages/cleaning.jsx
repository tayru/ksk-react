import { Link } from "react-router-dom";

const Cleaning = () => (
	<main className="page10">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-cleaning__title">Организация чистоты</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/service-cleaning.jpg" alt="cover"/>
			</div>
		</div>

		<div className="service-cleaning">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="service-cleaning__text">
							Чистота является неотъемлемым атрибутом хорошо организованного мероприятия. <br/><br/>

							Мы предоставляем полный цикл услуг в этом направлении:<br/><br/>


							• Зачистка после монтажа <br/>
							• Послеустановочная уборка площадки<br/>
							• Генеральная уборка перед началом события<br/>
							• Поддержание чистоты непосредственно во время мероприятия
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
	
	export default Cleaning;