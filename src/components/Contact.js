import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';
import useInput from '../hooks/use-input';
const Conatct=()=>{
  const {
         value:enteredName,
         isValid:enteredNameIsValid,
         hasError:inputNameError,
         valueChangeHandler:nameChangeHandler,
         inputBlurHandler:nameInputBlurHandler,
         reset:resetNameInput,
        }=useInput(value=>value.trim()!=='');

  const {
        value:enteredEmail,
        isValid:enteredEmailIsVaild,
        hasError:inputEmailError,
        valueChangeHandler:emailChangeHandler,
        inputBlurHandler:emailInputBlurHandler,
        reset:resetEmailInput,
        }=useInput(value=>(value.trim()!=='') && (value.match(/.com/gi)?true:false) && (value.includes('@')));
  const {
        value:enteredSubject,
        isValid:enteredSubjectIsValid,
        hasError:inputSubjectError,
        valueChangeHandler:subjectChangeHandler,
        inputBlurHandler:subjectInputBlurHandler,
        reset:resetSubjectInput,
        }=useInput(value=>value.trim()!=='');
  const {
          value:enteredMessage,
          isValid:enteredMessageIsValid,
          hasError:inputMessageError,
          valueChangeHandler:messageChangeHandler,
          inputBlurHandler:messageInputBlurHandler,
          reset:resetMessageInput,
          }=useInput(value=>value.trim()!=='');
  // const [enteredMessage,setEnteredMessage]=useState('');
  const [formISValid,setFormISValid]=useState(false);
  const form = useRef();



  // const msgChangeHandler=e=>{
  //   setEnteredMessage(e.target.value);
  // }

  useEffect(()=>{
    enteredNameIsValid && enteredEmailIsVaild && enteredSubjectIsValid && enteredMessageIsValid ?setFormISValid(true):setFormISValid(false);
  },[enteredNameIsValid, enteredEmailIsVaild, enteredSubjectIsValid ,enteredMessageIsValid]);

  const sendEmail = (e) => {
    e.preventDefault();
    if(!enteredNameIsValid && !enteredEmailIsVaild && !enteredSubjectIsValid  && !enteredMessageIsValid){
      return;
    }
    emailjs.sendForm('service_5dt0r67', 'template_3zwp4eb', form.current, 'mfHdqYCxdHvNZilBu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log(enteredName);
      resetNameInput();
      resetEmailInput();
      resetSubjectInput();
      resetMessageInput();
  };
  
  const inputClasses=inputNameError?'contact__form-error border_red add_margin-top':'contact__form-input';
  const inputClassesEmail=inputEmailError?'contact__form-error border_red add_margin-top':'contact__form-input';
  const inputClassesSubject=inputSubjectError?'contact__form-error border_red add_margin-top':'contact__form-input';
  const inputClassesMessage=inputMessageError?'contact__form-error border_red add_margin-top':'contact__form-input';
  return(
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Connect with Me</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's get in touch!</h3>
                    <p className="contact__details">send me an email.</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-group">
                        <div className="contact__form-div">
                         {inputNameError?<p className='contact__errormsg'>Please enter your name here*.</p>:' '}
                         <input type="text" name="user_name" onBlur={nameInputBlurHandler} className={inputClasses} onChange={nameChangeHandler} placeholder='Enter your name' value={enteredName}/>
                        </div>

                        <div className="contact__form-div">
                          {inputEmailError?<p className='contact__errormsg'>Please enter vaild email*.</p>:''}
                          <input type="email" name="user_email" onBlur={emailInputBlurHandler} className={inputClassesEmail} onChange={emailChangeHandler} placeholder='Enter your email' value={enteredEmail} />
                        </div>
                        
                    </div>

                    <div className="contact__form-div">
                       {inputSubjectError?<p className='contact__errormsg'>Please enter vaild subject*.</p>:''}
                       <input type="text" name="message" onBlur={subjectInputBlurHandler}  className={inputClassesSubject}  onChange={subjectChangeHandler} placeholder='Enter your subject' value={enteredSubject}/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                       {inputMessageError?<p className='contact__errormsg'>Please enter vaild Message*.</p>:''}
                        <textarea name="message" id="" cols="30" rows="10" onBlur={messageInputBlurHandler} className={inputClassesMessage} onChange={messageChangeHandler} placeholder='write your message' value={enteredMessage}></textarea>
                    </div>

                    <button className='btn' disabled={!formISValid} >Send Message</button>
                </form>
            </div>
        </section>
    );
 }
 export default Conatct;