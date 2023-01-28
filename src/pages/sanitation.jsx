import { Link } from "react-router-dom";

const Sanitation  = () => (
	<main className="page9">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-sanitation__title">Организация санитарной обработки</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/service-sanitation.jpg" alt="cover"/>
			</div>
		</div>

		<div className="service-sanitation">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="service-sanitation__text">
							<span>Санитарная обработка</span> — составная часть
							специальной обработки, заключающаяся в проведении мероприятий, направленная на уничтожение,
							обезвреживание и обеззараживание на мероприятии. <br/><br/>
							Наши сотрудники соблюдают тайминги обработки всех поверхностей и меры защиты.
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
	
	export default Sanitation;