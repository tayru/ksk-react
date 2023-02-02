import Slider from "react-slick";
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const Portfolio = () => (
	<main class="page4">
		<div class="page__main-block main-block">
			<div class="main-block__container _container portfolio__image">
				<h1 class="portfolio__title">Портфолио</h1>
				<div class="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
		</div>

		<div class="portfolio">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
					<h2 class="slider__title">Фестивали</h2>
						<div class="slider-portfolio">
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
						</div>
					</div>

					<div class="col-sm-12">
					<h2 class="slider__title">Городские праздники</h2>
						<div class="slider-portfolio">
							<Slider {...settings}>
								<div class="slider-portfolio__item">
									<img src="/static/img/city1.jpg" alt=""/>
									<h3 className="portfolio__item-title">День города Верея</h3>
								<div className="portfolio__item-back"></div>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/city2.jpg" alt=""/>
									<h3 className="portfolio__item-title">День города Верея</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/city4.jpg" alt=""/>
									<h3 className="portfolio__item-title">День города Верея</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/city5.jpg" alt=""/>
									<h3 className="portfolio__item-title">День города Верея</h3>
								</div>
							</Slider>
						</div>
					</div>

					<div class="col-sm-12">
					<h2 class="slider__title">Выставки и форумы</h2>
						<div class="slider-portfolio">
							<Slider {...settings}>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums1.jpg" alt=""/>
									<h3 className="portfolio__item-title">VolksWagen</h3>
								<div className="portfolio__item-back"></div>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums2.jpg" alt=""/>
									<h3 className="portfolio__item-title">HiFi&High End Show 2021</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums3.jpg" alt=""/>
									<h3 className="portfolio__item-title">HiFi&High End Show 2021</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums5.jpg" alt=""/>
									<h3 className="portfolio__item-title">ISR / HTB 2021</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums7.jpg" alt=""/>
									<h3 className="portfolio__item-title">ISR / HTB 2021</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums8.jpg" alt=""/>
									<h3 className="portfolio__item-title">ISR / HTB 2021</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums9.jpg" alt=""/>
									<h3 className="portfolio__item-title">ISR / HTB 2021</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums10.jpg" alt=""/>
									<h3 className="portfolio__item-title">Форум MUSE</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums11.jpg" alt=""/>
									<h3 className="portfolio__item-title">Форум MUSE</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums12.jpg" alt=""/>
									<h3 className="portfolio__item-title">Форум MUSE</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/forums13.jpg" alt=""/>
									<h3 className="portfolio__item-title">Форум MUSE</h3>
								</div>
							</Slider>
						</div>
					</div>
					
					<div class="col-sm-12">
					<h2 class="slider__title">Закрытые мероприятия</h2>
						<div class="slider-portfolio">
							<Slider {...settings}>
								<div class="slider-portfolio__item">
									<img src="/static/img/events1.jpg" alt=""/>
									<h3 className="portfolio__item-title">40 лет Аэрофлотуn</h3>
								<div className="portfolio__item-back"></div>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/events2.jpg" alt=""/>
									<h3 className="portfolio__item-title">40 лет Аэрофлоту</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/events3.jpg" alt=""/>
									<h3 className="portfolio__item-title">40 лет Аэрофлоту</h3>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/events4.jpg" alt=""/>
									<h3 className="portfolio__item-title">40 лет Аэрофлоту</h3>
								</div>
							</Slider>
						</div>
					</div>

				</div>
			</div>
		</div>



</main>
	)
	
	export default Portfolio;