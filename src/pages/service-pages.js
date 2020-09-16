import React from 'react'
import ServiceComponent from '../components/service-component'
import {useSelector} from 'react-redux'

const ServicePages = () => {
    const service = useSelector(({service}) => service)

    return (
        <div className='wrapper'>
            <section className="section">
                <div className={'section_title'}>Услуги</div>
                <div className='section-content_text '>Наша компания оказывает
                    полный перечень услуг по внедрению систем автоматизации на
                    базе
                    программных продуктов «1С», используя передовые технологии
                    работы и накопленный опыт автоматизации компаний малого,
                    среднего и крупного бизнеса.
                </div>
                <div className='section-content_text '> Наши специалисты помогут
                    сформировать оптимальный для Вашего бизнеса и Ваших задач
                    пакет
                    услуг по автоматизации - учитывающий не только сиюминутные
                    требования, но и перспективы развития Вашего бизнеса.
                </div>
                <div className='section-content_text '>Мы оказываем следующие
                    услуги:
                    <ul>
                        <li> проведение консультаций по выбору программного
                            обеспечения
                        </li>
                        <li> доставка и установка программного обеспечения
                        </li>
                        <li> работы по настройке и внедрению
                        </li>
                        <li> обучение персонала работе с системой
                        </li>

                        <li> информационно-технологическое сопровождение (ИТС)
                        </li>

                        <li> сопровождение сданной в эксплуатацию системы
                        </li>
                    </ul>
                </div>
                <div className='section-content_text '>Для оперативного решения
                    текущих задач (например, срочного
                    обновления конфигурации программного обеспечения,
                    обеспечения
                    бесперебойной работы, создания новых форм или документов)
                    специалисты нашей компании готовы оказать разовые услуги.

                </div>
                <div className='section-content_text '> Стоимость услуг
                    Опыт внедрений программ семейства «1С:Предприятие 8»
                    показывает, что
                    оптимальное решение бизнес-задач предприятия требует
                    комплексного
                    подхода: от определения целей компании до оптимизации
                    процессов
                    управления и построения системы информационного обеспечения
                    с учетом
                    специфики бизнеса.
                </div>
                <div className='section-content_text '>Компании, входящие в сеть
                    партнеров 1С:Консалтинг, реализуют в
                    рамках этого направления комплексный подход, который
                    сочетает
                    консалтинг в определенных областях управления,
                    бухгалтерского учета
                    и налогообложения с услугами по автоматизации управленческих
                    и
                    учетных задач на базе семейства программ «1С:Предприятие».
                </div>
            </section>


            <div className="service-com">
                {
                    service.map((el) => {
                        return <ServiceComponent title={el.title}
                                                 key={`${el.title}_${el.id}`}/>
                    })
                }
            </div>
        </div>
    )
}
export default ServicePages