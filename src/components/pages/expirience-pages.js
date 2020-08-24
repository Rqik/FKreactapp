import React from 'react'
import './expirience-pages.scss'
import SVG from '../svg-img'

const ExpiriencePages = () => {


    return (
        <div className='wrapper'>
            <div className='exp'>
                <div className='exp-sidebar'>
                    <div className='filter-title'>Внедренные решения</div>
                    <div className='comp-search'>
                        <form action="">
                            <input className='search-exp' type='text'/>
                            <button type={'submit'}>
                                Поиск
                                {/*<SVG name='search'/>*/}
                            </button>
                        </form>
                    </div>
                </div>
                <form action=''>
                    <fieldset>
                        <legend>Внедрение по отраслям</legend>

                        <label className='category'><input
                            type='checkbox'/> Отрасль </label>
                        <label className='category'><input
                            type='checkbox'/> Отрасль </label>
                        <label className='category'><input
                            type='checkbox'/> Отрасль </label>
                        <button className='button button-push' type='submit'
                                value='filtr'>Фильтр
                        </button>
                        <button className='button button-push_clear'
                                type='reset' value='reset'> Сброс
                        </button>
                    </fieldset>
                </form>

                <div className='exp-content'>


                    <div className='exp-block'>
                        <div className='exp_title'>Автоматизация оперативного
                            учета товаров на базе ПП «1С:Управление торговлей 8»
                            у ИП Балаева Т.А.
                        </div>
                        <div className="exp_text">
                            <ul>
                                <li> Клиент: ИП Балаев Т.А.</li>
                                <li> Внедренный продукт: 1С:Управление торговлей
                                </li>
                                <li> Версия: 8.3, сетевая
                                </li>
                            </ul>

                        </div>
                        <div className="exp_data">
                            <ul>
                                <li>Отрасль: Торговля</li>
                                <li> Дата внедрения: 12.09.2016 11:56:00</li>
                            </ul>
                        </div>


                    </div>
                    <div className='exp-block'>
                        <div className='exp_title'>Автоматизация оперативного
                            учета товаров на базе ПП «1С:Управление торговлей 8»
                            у ИП Балаева Т.А.
                        </div>
                        <div className="exp_text">
                            <ul>
                                <li> Клиент: ИП Балаев Т.А.</li>
                                <li> Внедренный продукт: 1С:Управление торговлей
                                </li>
                                <li> Версия: 8.3, сетевая
                                </li>
                            </ul>

                        </div>
                        <div className="exp_data">
                            <ul>
                                <li>Отрасль: Торговля</li>
                                <li> Дата внедрения: 12.09.2016 11:56:00</li>
                            </ul>
                        </div>


                    </div>
                    <div className='exp-block'>
                        <div className='exp_title'>Автоматизация оперативного
                            учета товаров на базе ПП «1С:Управление торговлей 8»
                            у ИП Балаева Т.А.
                        </div>
                        <div className="exp_text">
                            <ul>
                                <li> Клиент: ИП Балаев Т.А.</li>
                                <li> Внедренный продукт: 1С:Управление торговлей
                                </li>
                                <li> Версия: 8.3, сетевая
                                </li>
                            </ul>

                        </div>
                        <div className="exp_data">
                            <ul>
                                <li>Отрасль: Торговля</li>
                                <li> Дата внедрения: 12.09.2016 11:56:00</li>
                            </ul>
                        </div>


                    </div>
                    <div className='exp-block'>
                        <div className='exp_title'>Автоматизация оперативного
                            учета товаров на базе ПП «1С:Управление торговлей 8»
                            у ИП Балаева Т.А.
                        </div>
                        <div className="exp_text">
                            <ul>
                                <li> Клиент: ИП Балаев Т.А.</li>
                                <li> Внедренный продукт: 1С:Управление торговлей
                                </li>
                                <li> Версия: 8.3, сетевая
                                </li>
                            </ul>

                        </div>
                        <div className="exp_data">
                            <ul>
                                <li>Отрасль: Торговля</li>
                                <li> Дата внедрения: 12.09.2016 11:56:00</li>
                            </ul>
                        </div>


                    </div>


                </div>


            </div>
        </div>
    )
}

export default ExpiriencePages