import Form1 from "../components/form1";

const About = () => (
    <main className="page2">
        <div className="page__main-block main-block">
            <div className="main-block__container _container">
                <h1 className="page2__title">О нас</h1>
                <div className="divider">
                    <img src="/static/img/divider-white.svg" alt=""/>
                </div>
            </div>
            <div className="main-block__image _ibg about-cover">
                <img src="/static/img/about.jpg" alt="cover"/>
            </div>
        </div>

        <div className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="about-us__text">
                            <h2 className="about-us__title">
                                KSK People — <span>профессиональная команда</span> по предоставлению персонала
                            </h2>
                            Предоставляем полный спектр услуг для проведения мероприятий. <br/><br/>
                            По существу знаем, что от персонала зависит успех мероприятия, поэтому претворяя многолетний
                            опыт нашей команды, мы предвосхищаем все ваши ожидания и берем ваши заботы на себя.<br/><br/>
                            Обращаясь к нам, Вы находите надëжного партнера и подрядчика в решении ваших забот с
                            персоналом.
                            Поможем Вам в мероприятии любого формата.
                            Первоклассные гардеробщики, официанты и хостес обслужат Ваших гостей по высшему разряду.
                            Хелперы и администраторы безопасности обеспечат Вас уверенностью в том что все пройдет
                            отлично. Наши грузчики аккуратно и оперативно помогут с погрузкой и разгрузкой необходимого
                            реквизита.
                            Зарядим Вас и Ваших гостей на позитив, вне зависимости от сложности проекта и контингента
                            гостей.<br/><br/>
                            Свяжитесь с нами сейчас, и Мы станем решаторами Ваших забот!
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="feedback-first__about-us">
				<Form1/>
        </div>


        <div className="team">
            <div className="container">
                <div className="row">
                    <h2 className="team__title">Наша команда</h2>
										<div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Самсонов Владимир <br /><br />Исполнительный директор</h3>
                                <p>
																<span>«Стоит быть влюбленным в свою работу. Работа должна приносить радость, удовольствие и повышать качество жизни. Event — это про любовь своей работы»</span> 

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Samsonov2.png" alt=""/>
                                <h3 className="staff__title2">Самсонов Владимир</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
										<div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Комарский Никита <br /><br />Управляющий партнёр</h3>
                                <p>
																<span>«Наша работа — приносить наиболее желанный комфорт нашим клиентам и подрядчикам. Мы прежде всего думаем о нашей репутации как надежной компании»</span>

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Komarskij.jpg" alt=""/>
                                <h3 className="staff__title2">Комарский Никита</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Картамышев Алексей <br /><br />Ведущий логист проектов</h3>
                                <p>
																<span>«Наша цель — это качество. 
Я твёрдо верю, что только качественное сопровождение мероприятия позволит поднять его статусность в глазах гостей и организаторов»</span>

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Kartamyshev.jpg" alt=""/>
                                <h3 className="staff__title2">Картамышев Алексей </h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Грибанов Виталий <br /><br />Ведущий специалист организации и реализации парковочного пространства </h3>
                                <p>
																<span>«Всегда найдётся свободное место. Задача организации парковки одна из самых главных при проведении фестивалей. Огромный опыт позволяет урегулировать любую ситуацию»</span>

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Gribanov.png" alt=""/>
                                <h3 className="staff__title2">Грибанов Виталий</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Галыка Роман <br /><br />Руководитель направления обеспечения безопасности</h3>
                                <p>
																<span>«С вопроса обеспечения безопасности начинается успешная реализация мероприятия»</span>
                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Galyka.jpg" alt=""/>
                                <h3 className="staff__title2">Галыка Роман</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Копосов Пётр <br /><br />Менеджер реализации проектов</h3>
                                <p>
																<span>«Всегда важно уделять время на подготовку, мероприятие начинается с планирования»</span>

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Koposov.jpg" alt=""/>
                                <h3 className="staff__title2">Копосов Пётр</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Попов Роман <br /><br /> Менеджер реализации проектов</h3>
                                <p>
																<span>«Вкладываю максимум своих сил, чтобы принести всё лучшее, что могу дать»</span>

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Popov.jpg" alt=""/>
                                <h3 className="staff__title2">Попов Роман</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Лыков Евгений <br /><br />Менеджер реализации проектов</h3>
                                <p>
																<span>«Никогда не сдаваться в своей работе. 
Безвыходных ситуаций не бывает»</span>

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/Lykov.jpg" alt=""/>
                                <h3 className="staff__title2">Лыков Евгений</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </main>

)

export default About;