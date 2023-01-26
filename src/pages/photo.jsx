import { Link } from "react-router-dom";

const Photo = () => (
	<main className="page13">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-photo__title">Фото/видеосъемка</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/d85de090-1623-4208-bbf1-8b5cd485d31b.jfif" alt="cover"/>
			</div>
		</div>

		<div className="service-photo">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="service-photo__text">
							Текст
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="services__buttons">
		<Link to="/services"><button type="submit" className="btn btn-default mb-3 button2">Список услуг</button></Link>
		<Link to="/contacts"><button type="submit" className="btn btn-default mb-3 button1">Заказать</button></Link>
		</div>


	</main>

)
	
	export default Photo;