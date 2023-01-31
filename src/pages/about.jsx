
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
            <div className="container feedback-first__block">
                <div className="feedback-first__block-flex">
                    <div className="feedback-input-wrap feedback-input1">
                        <input type="text" className="feedback-input" placeholder="Как к Вам обращаться?"/>
                    </div>
                    <div className="feedback-input-wrap feedback-input2">
                        <input type="phone" className="feedback-input" placeholder="Ваш телефон"/>
                    </div>
                    <div className="feedback-first__button">
                        <button type="submit" className="btn-default mb-3 button1">Перезвоните мне</button>
                    </div>
                </div>
                <h2 className="feedback__text">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </h2>
            </div>
        </div>


        <div className="team">
            <div className="container">
                <div className="row">
                    <h2 className="team__title">Наша команда</h2>
										<div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Самсонов Владимир <br /><br /> Должность: Исполнительный директор</h3>
                                <p>
																«Стоит быть влюбленным в свою работу. 
Работа должна приносить радость, должна приносить удовольствие и повышать Ваше качество жизни и качество жизни Ваших коллег. Event — это именно та область, которая позволяет любить свою работу» 

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="staff__title2">Самсонов Владимир</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
										<div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Комарский Никита <br /><br /> Должность: Управляющий партнёр</h3>
                                <p>
																«Думать о людях в своей работе. 
Наша работа — приносить наиболее желанный комфорт нашим клиентам и подрядчикам. Мы прежде всего думаем о нашей репутации как надежной компании»

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="staff__title2">Комарский Никита</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Картамышев Алексей <br /><br /> Должность: Ведущий логист проектов</h3>
                                <p>
																«Наша цель — это качество. 
Я твёрдо верю, что только качественное сопровождение мероприятия позволит поднять его статусность в глазах гостей и организаторов»

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="staff__title2">Картамышев Алексей </h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Грибанов Виталий <br /><br /> Должность: Ведущий специалист организации и реализации парковочного пространства </h3>
                                <p>
																«Всегда найдётся свободное место. 
Задача организации парковки одна из самых главных во время проведения фестивалей. Огромный опыт позволяет разрегулировать практически любую ситуацию»

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="staff__title2">Грибанов Виталий</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Галыка Роман <br /><br /> Должность: Руководитель направления обеспечения безопасности</h3>
                                <p>
																«С вопроса обеспечения безопасности мероприятия начинается цеха его успешной реализации» 
                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="staff__title2">Галыка Роман</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Копосов Пётр <br /><br /> Должность: Менеджер реализации проектов</h3>
                                <p>
																«Используем своё время к подготовке мероприятий. 
Мероприятие начинается с планирования, без хорошего плана проведения, это как строить современный дом на фундаменте без цемента»

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="staff__title2">Копосов Пётр</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Попов Роман <br /><br /> Должность: Менеджер реализации проектов</h3>
                                <p>
																«Делаю мир вокруг себя лучше. 
В свою работу вкладываюсь в полную силу, чтобы принести в мир всё лучшее, что могу дать»

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
                                <h3 className="staff__title2">Попов Роман</h3>
																<div className="staff__card-back"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="staff__card">
                            <div className="staff__text">
                                <h3 className="staff__text-title">Лыков Евгений <br /><br /> Должность: Менеджер реализации проектов</h3>
                                <p>
																«Никогда не сдаваться в своей работе. 
Безвыходных ситуаций не бывает»

                                </p>
                            </div>
                            <img className="staff__img" src="/static/img/helper-staff.jpg" alt=""/>
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