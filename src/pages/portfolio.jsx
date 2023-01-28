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
			<div class="main-block__container _container">
				<h1 class="portfolio__title">Портфолио</h1>
				<div class="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div class="main-block__image _ibg">
				<img src="/static/img/portfolio.jpg" alt="cover"/>
			</div>
		</div>

		<div class="portfolio">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">

						<div class="slider-portfolio">
							<Slider {...settings}>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals.jpg" alt=""/>
							</div>
							<div class="slider-portfolio__item">
								<img src="/static/img/festivals.jpg" alt=""/>
							</div>
							</Slider>
						</div>
					</div>

					<div class="col-sm-12">
						<div class="slider-portfolio">
							<Slider {...settings}>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
							</Slider>
						</div>
					</div>

					<div class="col-sm-12">
						<div class="slider-portfolio">
							<Slider {...settings}>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
							</Slider>
						</div>
					</div>

					<div class="col-sm-12">
						<div class="slider-portfolio">
							<Slider {...settings}>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
								</div>
								<div class="slider-portfolio__item">
									<img src="/static/img/festivals.jpg" alt=""/>
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