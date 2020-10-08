import React, {useEffect} from 'react'
import './expirience-pages.scss'
import {useDispatch, useSelector} from 'react-redux'
import ContentLoader from 'react-content-loader'
import {renderItems} from '../utils'
import {experienceDataLoadAction} from '../store/actions'


// по клику переход на новую страницу с более подробной информацией о решении
// тоже самое сделать для таблиц
const ExperiencePages = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(experienceDataLoadAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const load = useSelector(({experience}) => experience.isLoaded)

    const exp = useSelector(({experience}) => experience.items)

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
                    {load ? renderItems(exp)
                        :
                        (<><ContentLoader
                            speed={2}
                            width={100 + '%'}
                            height={180}
                            backgroundColor="#F0F2F5"
                            foregroundColor="#fdf1d2"
                        >
                            <rect x="0" y="50" rx="8" ry="8" width="100%"
                                  height="120"/>
                            <rect x="0" y="0" rx="8" ry="8" width="100%"
                                  height="34"/>
                        </ContentLoader>
                            <ContentLoader
                                speed={2}
                                width={100 + '%'}
                                height={180}
                                backgroundColor="#F0F2F5"
                                foregroundColor="#fdf1d2"
                            >
                                <rect x="0" y="50" rx="8" ry="8" width="100%"
                                      height="120"/>
                                <rect x="0" y="0" rx="8" ry="8" width="100%"
                                      height="34"/>
                            </ContentLoader></>)}
                </div>


            </div>
        </div>
    )
}

export default ExperiencePages