import { useRef } from "react";

const Form1 = () => {
 
	const nameRef = useRef();
	const phoneRef = useRef();
	
	const handleSubmit = () => {
		 
			fetch('/send.php', {
				 method: 'post',
				 body: new URLSearchParams({
						 "name": nameRef.current.value,
						 "phone": phoneRef.current.value,
				 })
			 }).then((response) => alert('Мы вам перезвоним'));
		 
	 }
	
 return (
 <div className="container feedback-first__block">
 <div className="feedback-first__block-flex">
 <div className="feedback-input-wrap feedback-input1">
 <input ref={nameRef}  type="text" className="feedback-input" placeholder="Как к Вам обращаться?"/>
 </div>
 <div className="feedback-input-wrap feedback-input2">
 <input ref={phoneRef} type="phone" className="feedback-input" placeholder="Ваш телефон"/>
 </div>
 <div className="feedback-first__button">
 <button type="submit" className="btn-default mb-3 button1" onClick={handleSubmit} >Перезвоните мне</button>
 </div>
 </div>
 <h2 className="feedback__text">
 Нажимая кнопку, Вы соглашаетесь на обработку персональных данных
 </h2>
 </div>);
	
 }

export default Form1;