import { Link } from "react-router-dom";

const Services = () => (
    <main className="page3">
        <div className="page__main-block main-block">
            <div className="main-block__container _container">
                <h1 className="page3__title">Услгуи и персонал</h1>
            </div>
            <div className="main-block__image _ibg">
                <img src="/static/img/09c50d3e-0620-4510-a264-c49d3827a506.jfif" alt="cover"/>
            </div>
        </div>

        <div className="services">
            <div className="container services__block">
                <div className="row">
                    <h2 className="services__title">Комплексные услгуи</h2>
                    <ul className="services-list">
                        <li className="services-list__item">
													<Link className="list__item-link" to="/parking">
                            Организация парковки и КПП <img className="angle-services" src="/static/img/Angle-services.svg" alt="" />
														</Link>
                        </li>
												<li className="services-list__item">
													<Link className="list__item-link" to="/sanitation">
													Организация санитарной обработки <img className="angle-services" src="/static/img/Angle-services.svg" alt="" />
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/security">
													Организация безопасности <img className="angle-services" src="/static/img/Angle-services.svg" alt="" />
														</Link>
                        </li>
												<li className="services-list__item">
													<Link className="list__item-link" to="/cleaning">
													Организация чистоты <img className="angle-services" src="/static/img/Angle-services.svg" alt="" />
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/promo">
													Промо-сопровождение <img className="angle-services" src="/static/img/Angle-services.svg" alt="" />
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/logistics">
													Логистическое сопровождение мероприятия <img className="angle-services" src="/static/img/Angle-services.svg" alt="" />
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/photo">
													Фото/видеосъемка <img className="angle-services" src="/static/img/Angle-services.svg" alt="" />
														</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="staff">
            <div className="container">
                <div className="row">
                    <h2 className="staff__title">Персонал на мероприятия</h2>
                    <div className="col">
                        <div className="service">
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
                            <img className="service__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                            <div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Грузчик</h3>
                                <p>
																Сотрудники выполняющие широкий
спектр услуг от погрузочно-разгрузочных
работ до монтажа конструкций.
Необходимо воздвигнуть конструкции
нестандартных форм и размеров? Сделаем!
Монтажники на мероприятие, способные
горы не только свернуть, но и раскрасить
во все цвета радуги.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/loader-staff.jpg" alt=""/>
                                <h3 className="service__title">Грузчик</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Клинер</h3>
                                <p>
																Уборка до и после мероприятия
предусматривает очищение поверхностей
от загрязнений сухим и мокрым способом,
вынос мусора, чистку мебели и текстиля,
дезинфекцию санитарных комнат, уборка
территории, очистка интерьерного декора.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/cleaner-staff.jpg" alt=""/>
                                <h3 className="service__title">Клинер</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
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
                            <img className="service__img" src="/static/img/parking-staff.jpg" alt=""/>
                                <h3 className="service__title">Парковщик</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Безопасность</h3>
                                <p>
                                    Профессиональные сотрудники на частное
                                    мероприятие – гарантия безопасности
                                    участников и гостей события.
                                    Посторонние не пройдут, любой конфликт
                                    будет исчерпан прежде, чем начнется.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/безопасность.jpg" alt=""/>
                                <h3 className="service__title">Безопасность</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Промоутер</h3>
                                <p>
                                    
Молодые юноши и девушки
занимающиеся рекламой компании
или товара, события или услуги,
опросом гостей и BTL-акциями.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/promoter-staff.jpg" alt=""/>
                                <h3 className="service__title">Промоутер</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
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
                            <img className="service__img" src="/static/img/promomodel-staff.jpg" alt=""/>
                                <h3 className="service__title">Промо-модель</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
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
                            <img className="service__img" src="/static/img/promohostess-staff.jpg" alt=""/>
                                <h3 className="service__title">Промо-хостес</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Гардеробщик</h3>
                                <p>
																Молодые ребята осуществляющие прием
на хранение верхней одежды,
головных уборов, обуви и других
личных вещей гостей мероприятия.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/cloakroom-staff.jpg" alt=""/>
                                <h3 className="service__title">Гардеробщик</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Официант</h3>
                                <p>
																Услуги выездных официантов и барменов
- это простой и недорогой способ организовать
Ваше мероприятие на высоком уровне.
Мы имеем проверенную базу специалистов
готовых сегодня выехать на ваш проект.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/waiter-staff.jpg" alt=""/>
                                <h3 className="service__title">Официант</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Бармен/бариста</h3>
                                <p>
																Услуги выездных официантов и барменов
- это простой и недорогой способ организовать
Ваше мероприятие на высоком уровне.
Мы имеем проверенную базу специалистов
готовых сегодня выехать на ваш проект.
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/barman-staff.jpg" alt=""/>
                                <h3 className="service__title">Бармен/бариста</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Кассир</h3>
                                <p>
																В некотором роде, лицо мероприятия.
Ведь часто именно они первыми встречают
посетителей или провожают их.
Задают им тон и настроение.
Если Вам нужны обученные кассиры,
обращайтесь к нам!

                                </p>
                            </div>
                            <img className="service__img" src="/static/img/cashier-staff.jpg" alt=""/>
                                <h3 className="service__title">Кассир</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Аниматор</h3>
                                <p>
																Аниматоры от KSK People aктивны, общительны и доброжелательны, симпатичны и стройны. Успешно взаимодействуют с любой аудиторией, как с детьми и взрослыми, так и с сисадминами, и поддерживают ту самую атмосферу, которая была обрисована Вами в презентации для Вашего клиента. 
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/animator-staff.png" alt=""/>
                                <h3 className="service__title">Аниматор</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Массовка</h3>
                                <p>
																Опытный статист или целая группа статистов — это одна из многих услуг, которые предлагает наше агентство. Наши сотрудники обладают минимальными актерскими навыками, не теряются в центре внимания и быстро реагируют на указания режиссера.
                                Предоставим массовку в любом объёме и количестве! 
                                </p>
                            </div>
                            <img className="service__img" src="/static/img/extras-staff.jpg" alt=""/>
                                <h3 className="service__title">Массовка</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service">
                            <div className="service__text">
                                <h3 className="service__text-title">Швейцар</h3>
                                <p>
																Швейцар KSK People позволит каждому из ваших гостей почувствовать себя влиятельной персоной, перед которой склонят голову другие.
Мы выберем симпатичных, галантных парней. Они наденут классический костюм или наряд в соответствии с вашими потребностями и спецификой мероприятия. 

                                </p>
                            </div>
                            <img className="service__img" src="/static/img/porter-staff.png" alt=""/>
                                <h3 className="service__title">Швейцар</h3>
																<div className="service__title-back"></div>
                        </div>
                    </div>
                
                </div>
            </div>
						<Link to="/contacts">
							<div className="order__button">
                <button type="submit" className="btn-default mb-3 button1">Оставить заявку</button>
            </div>
						</Link>
      
        </div>


    </main>

)

export default Services;