import React from 'react'
import './footer.scss'
import SVG from '../svg-img'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-log-phone'>

                    <div className='contact-log'>
                        <div className="rect">
                            <SVG name='rectangel'></SVG>
                        </div>
                        <div className='text-logo-1c'>
                            <SVG/>
                            <span>Группа компаний "КиН" <br/>
                        Качество и Надежность</span>
                        </div>
                        <div className='text-logo-1c'>

                            <SVG name='1c'></SVG>
                            франчайзи 1С, официальный партнёр
                        </div>
                    </div>

                    <div className='contact-phone'>
                        Телефон
                        <a href="tel:+78722560570">+7 (8722) 560-570</a>
                        <a href="tel:+79894471616">+7(989) 447-16-16</a>
                    </div>

                </div>

                <ul>
                    <li><Link to="/work">Работа в компании</Link></li>
                    <li><Link to="">Другие продукты</Link></li>
                    <li><Link to="">Дерево сайта</Link></li>
                    <li><Link to="">Другие сайты 1С</Link></li>
                </ul>
            </div>
            <div className='contact-address'>
                <div>Контакты</div>

                <div className='address'>Россия <br/>
                    Республика Дагестан <br/>
                    г.Махачкала
                </div>
                <div className='address-location'> ул.Ирчи Казака, 31, здание
                    "Магнит",<br/> 3 этаж <br/></div>


                <a href="mailto:1c@firmakin.ru">1c@firmakin.ru</a>


            </div>
        </div>)
}

export default Footer