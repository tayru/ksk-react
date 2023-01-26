import { Link } from "react-router-dom";

const Promo = () => (
	<main className="page11">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-promo__title">Промо-сопровождение</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/service-promo.jpg" alt="cover"/>
			</div>
		</div>

		<div className="service-promo">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="service-promo__text">
							Организуем для Вас: <br/><br/>

							• Презентации и выставки, на которых покупатели зрительно познакомятся с Вашими
							товарами;<br/>
							• Тестировании и дегустации продукции, в процессе которых у целевой аудитории
							сложится общее положительное впечатление о бренде;<br/>
							• Анонсировании выгод приобретения изделий и кoсультирование по вопросам,
							связанным с продукцией компании и др.<br/><br/>
							Наши промоакции всегда запоминающиеся, поскольку мы со всей ответственностью
							подходим к доверенным нам задачам.
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
	
	export default Promo;