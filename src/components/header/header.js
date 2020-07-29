import React from 'react'
import {Link} from 'react-router-dom'
import SVG from '../svg-img/svg'
import './header.scss'


const Header = () => {

    const scrollHeader = () => {

        let scrollTop = window.scrollY;
        const headerWrapper = document.querySelector(".header");

        if (scrollTop > 1) {
            headerWrapper.classList.add("stickly");
        } else {
            headerWrapper.classList.remove("stickly");
        }
    }

    React.useEffect(() => {
        document.addEventListener("scroll", scrollHeader);
        console.log('scroll')
    }, [])


    return (
        <div className='header  header-list'>

            <div className='logo-kin'>
                <Link to='/'>
                    <SVG/>
                </Link>
            </div>

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
                    <SVG name='search'/>
                </li>
            </ul>
        </div>
    )
}

export default Header