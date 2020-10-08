import React, {useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
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
                    <NavLink to='/company' activeClassName={'active'}>О компании</NavLink>
                </li>
                <li>
                    <NavLink to='/service' activeClassName={'active'}>Услуги</NavLink>
                </li>
                <li>
                    <NavLink to='/equipment' activeClassName={'active'}>Торговое оборудование</NavLink>
                </li>
                <li>
                    <NavLink to='/experience' activeClassName={'active'}>Наш опыт</NavLink>
                </li>
                <li>
                    <NavLink to='/work' activeClassName={'active'}>Работа в компании</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassName={'active'}>Контакты</NavLink>
                </li>
                <li>
                    <NavLink to='/fresh' activeClassName={'active'}>1С Фреш</NavLink>
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