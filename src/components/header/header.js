import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import SVG from '../svg-img/svg'
import './header.scss'


const Header = () => {
    const [searchPanel, setSearchPanel] = useState(false)

    const scrollHeader = () => {

        let scrollTop = window.scrollY
        const headerWrapper = document.querySelector(".header")

        if (scrollTop > 1) {
            headerWrapper.classList.add("stickly")
        } else {
            headerWrapper.classList.remove("stickly")
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollHeader)
    }, [])


    return (
        <div className='header  header-list'>


            <div className='logo-kin'>
                <Link to='/'>
                    <SVG/>
                </Link>
            </div>
            <button className='menu_button'>
                        <SVG name='exit'/>
                        <SVG name='menu'/>


            </button>
            <ul className='header-nav'>
                <li>
                    <Link to='/company'>О компании</Link>
                </li>
                <li>
                    <Link to='/service'>Услуги</Link>
                </li>
                <li>
                    <Link to='/equipment'>Торговое оборудование</Link>
                </li>
                <li>
                    <Link to='/experience'>Наш опыт</Link>
                </li>
                <li>
                    <Link to='work'>Работа в компании</Link>
                </li>
                <li>
                    <Link to='contact'>Контакты</Link>
                </li>
                <li>
                    <Link to='fresh'>1С Фреш</Link>
                </li>
                <li>
                    <SVG onClick={() => {
                        setSearchPanel(!searchPanel)
                    }}
                         name='search'/>
                </li>
            </ul>

            <div
                className={searchPanel ? 'search-field search-field-show' : 'search-field'}>
                <SVG onClick={() => {
                    setSearchPanel(false)
                }}
                     name='search'/>

                <form className='form-input-search' action="">
                    <input className='input-search' type="search"
                           placeholder="Поиск..."/>
                    <input type='submit' className='input-search-submit'
                           value='найти'/>
                </form>

            </div>


        </div>
    )
}

export default Header