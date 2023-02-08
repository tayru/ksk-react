import { Link } from "react-router-dom";

const Logistics = () => (
	<main className="page12">
		<div className="page__main-block main-block">
			<div className="main-block__container _container">
				<h1 className="service-logistics__title animate__animated animate__fadeInRight">Логистическое сопровождение мероприятия</h1>
				<div className="divider">
					<img src="/static/img/divider-white.svg" alt=""/>
				</div>
			</div>
			<div className="main-block__image _ibg">
				<img src="/static/img/service-logistics.jpg" alt="cover"/>
			</div>
		</div>

		<div className="service-logistics">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="divider">
							<img src="/static/img/stars.svg" alt=""/>
						</div>
						<div className="service-logistics__text">
						<span>Логист проекта</span> — это специалист, который позаботится обо всех организационных аспектах вашего мероприятия. От организации корпоративной вечеринки до огромного фестиваля с 40 000 гостей. <br /><br />
						Организация мероприятий требует много внимания и работы. Один организатор не может справиться с таким количеством задач. Доставка материалов и оборудования, установка декораций, монтаж стендов и рекламных кабинок, сортировка и демонстрация рекламных материалов — это лишь малая часть работы. Помимо всего прочего, нельзя забывать о подборе персонала, планировании мероприятия, составлении бюджета и контроле расходов, а также ведении бухгалтерского учета. При подготовке и продвижении мероприятий, выставок и конференций правильное распределение обязанностей является гарантией того, что все пройдет гладко. <br /><br />
<span>Кому нужен логист проекта?</span> <br /><br />
Крупным компаниям, которым нужен дополнительный специалист для организаций выставок и фестивалей. <br /><br />
Логист мероприятия позаботится о своевременной доставке и установке технического оборудования, вспомогательного оборудования и выставочных компонентов. <br /><br />
Частным лицам и компаниям для проведения корпоративных вечеринок, свадеб и юбилеев. Своевременная подача блюд, координация работы официантов и гардеробщиков, обеспечение необходимого количества посадочных мест, проверка чистоты помещения. <br /><br />
Мы всегда готовы обсудить все нюансы и требования к персоналу. В результате конструктивного диалога мы подберем лучшую команду, наиболее подходящую для вашего мероприятия.
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

	export default Logistics;