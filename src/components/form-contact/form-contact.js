import React, {useState} from 'react'
import './form.scss'

const FormContact = () => {
    // [phone, setPhone] = useState(2)


    return (

        <div className="form_wrapper">

               <h1 className="form_name">Начать внедрение</h1>

            <div className="form_content">
                Пожалуйста, заполните информацию ниже,
                и мы свяжемся с вами в течение одного рабочего дня, чтобы
                назначить консультацию. Мы с нетерпением ждем возможности помочь
                вам!
            </div>

            <form action="#" method="post">


                <label htmlFor="contactName">
                    <input type="text" name="contactName" id="contactName"
                           defaultValue={''}  placeholder="Имя"/>
                    <span>Имя *</span></label>

                <label htmlFor="contactName">
                    <input type="text" name="contactName" id="contactName"
                           defaultValue={''} placeholder="E-mail"/>
                    <span>E-mail *</span></label>


                <label htmlFor="phone">
                    <input placeholder="Телефон" type="tel" name="phone"
                           id="phone" defaultValue={''} pattern={/0-9/}
                   />
                    <span>Телефон *</span>

                </label>


                <div className="footer-form">
                    <button className='button button-confirm' type="button">отправить</button>
                    <span>* заполните обязательные поля</span>
                </div>
            </form>

        </div>
    )
}

export default FormContact