import { Link } from "react-router-dom";
import Slider from "react-slick";
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const Helper = () => (
	<main className="page7">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-parking__title">Хелпер</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/" alt="cover"/>
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
						Универсальные сотрудники
                                    выполняющие максимальное
                                    количество задач организатора.
                                    Разнесут полиграфию
                                    по своим местам.
                                    Соберут подарки для гостей
                                    и выполнят
                                    многие другие
                                    задачи поставленные организатором.
						</div>
					</div>
				</div>
			</div>
		</div>

		<Slider {...settings}>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals2.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
								<div className="portfolio__item-back"></div>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals1.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals5.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals6.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals9.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals10.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals11.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals12.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals13.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals14.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals15.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals16.jpg" alt=""/>
								<h3 className="portfolio__item-title">III Международный конный фестиваль "Иваново поле"</h3>
							</div>
							</Slider>

		<div className="services__buttons">
		<Link to="/services"><button type="submit" className="btn-default mb-3 button2">Список услуг</button></Link>
		<Link to="/contacts"><button type="submit" className="btn-default mb-3 button1">Заказать</button></Link>
		</div>


	</main>

)
	
	export default Helper;