import React from 'react'
import './section-content.scss'

const SectionContent = () => {
    return (
        <section className='sections'>
            <div>
                <div className='section_title'>Контакты</div>
                <div className='section-content_text '>
                    Группа компаний "КиН"
                    367003, Россия,Республика Дагестан, г.Махачкала, ул.Ирчи
                    Казака, 31, здание "Магнит", 3 этаж
                    <br/>
                    <a href="tel:+78722560570">+7(8722) 560-570</a> <br/>
                    <a href="tel:+79894471616">+7(989) 447-16-16</a>
                    <div className='graphic'>Режим работы: 9:00 - 18:00 (понедельник - пятница).
                        Выходной: суббота, воскресенье
                    </div>
                </div>
            </div>
            <div className="section-content">
                <div className='section-content_title'>
                    ООО «Фирма КиН»
                    <br/>
                    Профиль: 1С-Франчайзи, внедрение и сопровождение программ
                </div>
                <div className='section-content_text'>
                    Адрес: 367003, РД, г.Махачкала, ул.Ирчи Казака 31, здание
                    "Магнит", 3 этаж


                    <ul className='briks'>
                        <li> ИНН 0561048495 КПП 056101001</li>
                        <li> Ф-Л ГПБ (ОАО) в г.Ставрополе </li>
                        <li> БИК 040702754</li>
                        <li> к/сч 30101810600000000754</li>
                        <li> р/сч 40702810400070000593
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-content">
                <div className='section-content_title'>
                    ООО «Бизнес Эксперт»
                    <br/>
                    Профиль: Дистрибьютор торгового оборудования по Республике
                    Дагестан.
                </div>
                <div className='section-content_text'>Адрес: 367003, РД, г.Махачкала, ул.Ирчи Казака 31, здание "Магнит", 3 этаж

                        <ul className='briks'>
                            <li >  ИНН 0561047660 КПП 056101001</li>
                            <li> Ф-Л ГПБ (ОАО) в г.Ставрополе </li>
                            <li> БИК 040702754</li>
                            <li> к/сч 30101810600000000754</li>
                            <li> р/сч 40702810900070000530
                            </li>
                        </ul>

                </div>
            </div>
        </section>
    )
}
export default SectionContent