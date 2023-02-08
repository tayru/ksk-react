import { Link } from "react-router-dom";
import Form from "../components/form";
import Form1 from "../components/form1";
import Slider from "react-slick";
 
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
    
};
 
const getWindowDimensions = function () {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
 
if (getWindowDimensions().width <= 767) {
    settings.slidesToShow = 1;
} else if (getWindowDimensions().width <= 992) {
    settings.slidesToShow = 2;
}
 
const Main = () => (
    <main className="page1">
        <div className="page__main-block main-block">
            <div className="main-block__container _container">
                <h1 className="main-block__title animate__animated animate__fadeInRight">Предоставим <span>персонал</span>
                    <br/>в <span>любую точку</span> Москвы и области <br/>к назначенному часу</h1>
 
 
            </div>
            <div className="main-block__image _ibg">
                <img src="/static/img/cover.jpg" alt="cover"/>
            </div>
        </div>
 
        <div className="feedback-first">
                <Form1/>
        </div>
 
        <div className="simple-and-fast">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="simple-and-fast__title">Просто и быстро:</h2>
 
                        <div className="simple-and-fast__steps">
                            <div className="step step1">
                                <img src="/static/img/Send.svg" alt=""/>
                                <span>Заявка</span>
                            </div>
                            <div className="icon-next">
                                <img src="/static/img/Angle-right-blue.svg" alt=""/>
                            </div>
                            <div className="step step2">
                                <img src="/static/img/Group-chat.svg" alt=""/>
                                <span>Консультация</span>
                            </div>
                            <div className="icon-next">
                                <img src="/static/img/Angle-right-blue.svg" alt=""/>
                            </div>
                            <div className="step step3">
                                <img src="/static/img/Chat-check.svg" alt=""/>
                                <span>Подтверждение</span>
                            </div>
                            <div className="icon-next">
                                <img src="/static/img/Angle-right-blue.svg" alt=""/>
                            </div>
                            <div className="step step4">
                                <img src="/static/img/List-check.svg" alt=""/>
                                <span>Оформление</span>
                            </div>
                            <div className="icon-next">
                                <img src="/static/img/Angle-right-blue.svg" alt=""/>
                            </div>
                            <div className="step step5">
                                <img src="/static/img/Debit-card.svg" alt=""/>
                                <span>Оплата</span>
                            </div>
                            <div className="icon-next">
                                <img src="/static/img/Angle-right-blue.svg" alt=""/>
                            </div>
                            <div className="step step6">
                                <img src="/static/img/Flag.svg" alt=""/>
                                <span>Выполнение</span>
                            </div>
                            <div className="icon-next">
                                <img src="/static/img/Angle-right-blue.svg" alt=""/>
                            </div>
                            <div className="step step7">
                                <img src="/static/img/Check.svg" alt=""/>
                                <span>Закрытие заказа</span>
                            </div>
                        </div>
 
                        <div className="order__button">
                                                <Link to="/contacts"><button type="submit" className="btn-default mb-3 button1">Заказать</button></Link>
                        </div>
 
                    </div>
                </div>
            </div>
        </div>
 
        <div className="popular-services">
                <div className="container">
            <div className="row">
            <h2 className="popular-services__title"> Популярные услуги </h2>
                <div className="col-sm-12">
                <Slider {...settings}>
                <div className="col">
								<Link to="/valet"><div className="service">
                            <div className="service__text">
                                                        <h3 className="service__text-title">Парковщик</h3>
                                <p>
                                    Сотрудники занимающиеся
                                    навигацией автомобилей на стоянках
                                    или парковочных площадках.
                                    Помогут ровно и аккуратно припарковать
                                    автомобиль, а так же направят к ближайшему
                                    свободному месту и выезду с парковки.
                                </p>
                            </div>
                            <img className="service__img" src="static/img/parking-staff.jpg" alt=""/>
                                <h3 className="service__title">Парковщик</h3>
                                                                <div className="service__title-back"></div>
                        </div></Link>
                    </div>
                                        <div className="col">
																				<Link to="/guard"><div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Администратор безопасности</h3>
                                <p>
                                    Профессиональные сотрудники на
                                    мероприятие — гарантия безопасности
                                    участников и гостей события.
                                    Посторонние не пройдут, любой конфликт
                                    будет исчерпан прежде, чем начнется.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/security-staff.jpg" alt=""/>
                                <h3 className="service__title">Администратор безопасности</h3>
                                                                <div className="service__title-back"></div>
                        </div></Link>
                    </div>
                                        <div className="col">
																				<Link to="/promomodel"><div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Промо-модель</h3>
                                <p>
                                  
Высококвалифицированные девушки и юноши,
которые работают на различных рекламных
акциях и занимаются продвижением 
какого-либо продукта, компании или услуги,
обладают модельной внешностью.
                                </p>
                            </div>
                            <img className="service__img" src="static/img/promomodel-staff.jpg" alt=""/>
                                <h3 className="service__title">Промо-модель</h3>
                                                                <div className="service__title-back"></div>
                        </div></Link>
                    </div>
                                        <div className="col">
																				<Link to="/promohostess"><div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Промо-хостес</h3>
                                <p>
                                                                Гостеприимный промо-персонал,
обладающий приятной внешностью.
Их привлекают для презентации компании
на выставках, фестивалях, конферециях,
решения административных вопросов,
регистрации гостей на проекте или поддержания
имиджа мероприятия на высоком уровне.
                                </p>
                            </div>
                            <img className="service__img" src="static/img/promohostess-staff.jpg" alt=""/>
                                <h3 className="service__title">Промо-хостес</h3>
                                                                <div className="service__title-back"></div>
                        </div></Link>
                    </div>
                                        <div className="col">
																				<Link to="/helper"><div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Хелпер</h3>
                                <p>
                                    Универсальные сотрудники
                                    выполняющие максимальное
                                    количество задач организатора.
                                    Разнесут полиграфию
                                    по своим местам.
                                    Соберут подарки для гостей
                                    и выполнят
                                    многие другие
                                    задачи поставленные организатором.
                                </p>
                            </div>
                            <img className="service__img" src="static/img/helper-staff.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                                                                <div className="service__title-back"></div>
                        </div></Link>
                    </div>
                            </Slider>
                            <div className="services__button">
                                                <Link to="/services"><button type="submit" className="btn-default mb-3 button2">Все услуги</button></Link>
                        </div>
                </div>
            </div>
        </div>
        </div>
 
                <div className="advantages">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="list-advantages">
                            <div className="advantage advantage1">
                                <img className="advantage__image" src="/static/img/Group.svg" alt=""/>
                                <span>Высокая договоренность и оперативная коммуникация.</span>
                            </div>
                            <div className="advantage advantage2">
                                <img className="advantage__image" src="/static/img/star-02.svg" alt=""/>
                                <span>Профессионализм. Мы являемся специалистами своего дела!</span>
                            </div>
                            <div className="advantage advantage3">
                                <img className="advantage__image" src="/static/img/Safe-chat.svg" alt=""/>
                                <span>Индивидуальный подход и адаптивность решений Ваших задач.</span>
                            </div>
                        </div>
 
                        <video autoPlay loop muted controls className="advantages__video"
                              src="/static/img/VID_20200816_142820 (1).mp4"></video>
 
                        <h2 className="advantages__title">Организуем <span>логистику любого уровня</span> независимо от
                            условий и дальности!</h2>
                    </div>
                </div>
            </div>
        </div>
                
        <div className="why-we">
            <div className="container">
                <div className="row">
                    <div className="col why-we__block">
                        <img className="why-we__image" src="/static/img/Rectangle 22.png" alt=""/>
                    </div>
                    <div className="col">
                        <div className="divider-dark">
                            <img src="/static/img/divider-dark.svg" alt=""/>
                        </div>
                        <div className="why-we__text">
                            Предоставляем <span>100% квалифицированный</span> и обученный персонал. Работаем только с
                            гражданами России. Наши сотрудники обладают всеми необходимыми компетенциями: они
                            презентабельно выглядят, отличаются коммуникабельностью и точно проинструктированы по всем
                            особенностям работы на конкретном проекте и отличаются дисциплинированностью. <br/><br/>
                            <span>Полностью соблюдаем сроки</span> и все предварительные договоренности. Всегда во время
                            прибываем на площадку и строжайше выполняем все Ваши инструкции и пожелания. Вы можете
                            нанять у нас <span>персонал для проекта абсолютно любого уровня</span>! Обеспечим порядок,
                            чистоту, красоту на Вашем мероприятии и осуществим комплексный менеджмент. <br/> <br/>
                            У нас можно заказать реквизит и оборудование для мероприятий на правах аренды.
                        </div>
                        <div className="why-we__buttons">
                                                <Link to="/about"><button type="submit" className="btn-default mb-3 button2">Подробнее</button></Link>
                                                <Link to="/portfolio"><button type="submit" className="btn-default mb-3 button1">Портфолио</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="feedback-second">
            <div className="feedback-second__image _ibg">
                <img src="/static/img/cover.jpg" alt="cover"/>
            </div>
            <h2 className="feedback-second__title">Нужна помощь?</h2>
 
            <Form/>
 
        </div>
 
 
    </main>
 
)
 
export default Main;