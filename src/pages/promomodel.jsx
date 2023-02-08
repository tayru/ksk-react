import { Link } from "react-router-dom";
import Slider from "react-slick";
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const Promomodel = () => (
	<main className="page14">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="staff-helper__title">Промо-модель</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/promomodel-cover.jpg" alt="cover"/>
			</div>
		</div>

		<div className="staff-helper">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="staff-helper__text">
						Высококвалифицированные девушки и юноши,
которые работают на различных рекламных
акциях и занимаются продвижением 
какого-либо продукта, компании или услуги,
обладают модельной внешностью.
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
								<img src="/static/img/promomodel1.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/promomodel2.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/promomodel3.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/promomodel4.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/promomodel5.jpg" alt=""/>
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
	
	export default Promomodel;