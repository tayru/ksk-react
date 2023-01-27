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
                            Организация парковки и КПП
														</Link>
                        </li>
												<li className="services-list__item">
													<Link className="list__item-link" to="/sanitation">
													Организация санитарной обработки
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/security">
													Организация безопасности
														</Link>
                        </li>
												<li className="services-list__item">
													<Link className="list__item-link" to="/cleaning">
													Организация чистоты
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/promo">
													Промо-сопровождение
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/logistics">
													Логистическое сопровождение мероприятия
														</Link>
                        </li>
                        <li className="services-list__item">
													<Link className="list__item-link" to="/photo">
													Фото/видеосъемка
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
                    <div className="col-3">
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
                        </div>
                    </div>
                    <div className="col-3">
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
                        </div>
                    </div>
                    <div className="col-3">
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
                        </div>
                    </div>
                    <div className="col-3">
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
                        </div>
                    </div>
                    <div className="col-3">
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
                        </div>
                    </div>
                    <div className="col-3">
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
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                            <img className="service__img" src="/static/img/хелпер.jpg" alt=""/>
                                <h3 className="service__title">Хелпер</h3>
                        </div>
                    </div>
                </div>
            </div>
						<Link to="/contacts">
							<div className="order__button">
                <button type="submit" className="btn btn-default mb-3 button1">Оставить заявку</button>
            </div>
						</Link>
      
        </div>


    </main>

)

export default Services;