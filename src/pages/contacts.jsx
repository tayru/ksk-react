const Contacts = () => (
	<main className="page6">


		<div className="feedback-second">
			<div className="feedback-second__image _ibg">
				<img src="/img/IMG_1534.webp" alt="cover"/>
			</div>
			<div className="feedback-second__block">
				<h3 className="feedback-second__title2">Свяжитесь с нами, либо оставьте заявку и мы Вам перезвоним</h3>
				<div className="feedback-second__block-flex">
					<div className="feedback-second__block-flex_left">
						<input type="text" className="feedback-input" placeholder="Ваше имя"/>
							<input type="text" className="feedback-input" placeholder="Телефон"/>
								<input type="text" className="feedback-input" placeholder="Элекронная почта"/>
									<div className=" feedback-second__button">
										<button type="submit" className="btn btn-default mb-3 button1">Оставить заявку
										</button>
									</div>
									<h2 className="feedback__text">
										Нажимая кнопку, вы соглашаетесь на обработку персональных данных
									</h2>
					</div>
					<div className="feedback-second__block-flex_right">
						<textarea type="text" className="feedback-input feedback-input__textarea"
								  placeholder="Описание запроса"></textarea>
						<div className="feedback-second__contacts">
							<div className="feedback-second__phone">
								<img className="phone__image" src="/img/Call-2.svg" alt=""/> <a href="tel:+79309153808">+7
									(930) 915-38-08</a>
							</div>
							<div className="feedback-second__mail">
								<img className="mail__image" src="/img/Mail.svg" alt=""/> info@kskpeople.com
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>


	</main>

)
	
	export default Contacts;