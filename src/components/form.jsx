import { useRef } from "react";

const Form = () => {
 
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const descRef = useRef();
	
	const handleSubmit = () => {
		 
			fetch('/send.php', {
				 method: 'post',
				 body: new URLSearchParams({
						 "name": nameRef.current.value,
						 "phone": phoneRef.current.value,
						 "email": emailRef.current.value,
						 "description": descRef.current.value,
						 
				 })
			 }).then((response) => alert('Ваша заявка отправлена'));
		 
	 }
 return (
 <div className="feedback-second__block">
 <h3 className="feedback-second__title2">Свяжитесь с нами, либо оставьте заявку и мы Вам перезвоним</h3>
 <div className="feedback-second__block-flex">
 <div className="feedback-second__block-flex_left">
 <input ref={nameRef} type="text" className="feedback-input" placeholder="Ваше имя"/>
 <input ref={phoneRef} type="text" className="feedback-input" placeholder="Телефон"/>
 <input ref={emailRef} type="text" className="feedback-input" placeholder="Элекронная почта"/>
 <div className=" feedback-second__button">
 <button type="submit" className="btn-default mb-3 button1" onClick={handleSubmit} >Оставить заявку
 </button>
 </div>
 <h2 className="feedback__text">
 Нажимая кнопку, Вы соглашаетесь на обработку персональных данных
 </h2>
 </div>
 <div className="feedback-second__block-flex_right">
 <textarea ref={descRef} type="text" className="feedback-input feedback-input__textarea"
 placeholder="Описание запроса"></textarea>
 <div className="feedback-second__contacts">
 <div className="feedback-second__phone">
 <img className="phone__image" src="/static/img/Call-2.svg" alt=""/> <a href="tel:+79309153808">+7
 (930) 915-38-08</a>
 </div>
 <div className="feedback-second__mail">
 <img className="mail__image" src="/static/img/Mail.svg" alt=""/> <a href="mailto:info@kskpeople.com">info@kskpeople.com </a>
 </div>
	
 </div>
 </div>
 </div>
 </div>);
 }
 
export default Form;
