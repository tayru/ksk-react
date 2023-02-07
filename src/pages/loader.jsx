import { Link } from "react-router-dom";
import Slider from "react-slick";
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const Loader = () => (
	<main className="page15">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="staff-loader__title">Грузчик</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/loader-cover.jpg" alt="cover"/>
			</div>
		</div>

		<div className="staff-loader">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="staff-helper__text">
						Сотрудники выполняющие широкий
спектр услуг от погрузочно-разгрузочных
работ до монтажа конструкций.
Необходимо воздвигнуть конструкции
нестандартных форм и размеров? Сделаем!
Монтажники на мероприятие, способные
горы не только свернуть, но 
					</div>
				</div>
			</div>
		</div>
		</div>

		<div className="container">
			<div className="row">
				<div className="col-sm-12">
				<Slider {...settings}>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader1.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader2.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader3.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader4.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader5.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader6.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader7.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader8.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/loader9.jpg" alt=""/>
							</div>
							</Slider>
				</div>
			</div>
		</div>
		

							

		<div className="services__buttons">
		<Link to="/services"><button type="submit" className="btn-default mb-3 button2">Список услуг</button></Link>
		<Link to="/contacts"><button type="submit" className="btn-default mb-3 button1">Заказать</button></Link>
		</div>


	</main>

)
	
	export default Loader;