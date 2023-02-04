
const Form1 = () => (
	
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

)

export default Form1;