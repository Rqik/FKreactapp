import React from 'react'
import {Link} from 'react-router-dom'

// let els = { element: 'text ele', index: '123'}
// let {se, ke} = {se: els, ke: els.index}
// console.log(se, ke)
export const renderItems = (exp) => {
    return (exp.map((el, ind) => <ItemExperience
        key={'experience_comp' + el.company + ind}
        el={el}/>))
}

const ItemExperience = ({el}) => {
    return (
        <div
            className={'exp-block'}>
            <div className={'exp_title'}>{el.company}</div>
            <div className={'exp_text'}>
                <ul>
                    <li>Клиент:{el.client}</li>
                    <li>Внедренный продукт:{el.name}</li>
                    <li>Версия:{el.version}</li>
                </ul>
            </div>
            <div className={'exp_data'}>
                <ul>
                    <li>Отрасль: {el.branch}</li>
                    <li>Дата: {el.data}</li>
                </ul>
            </div>
        </div>
    )
}


export const trRender = (el, idx) => {
    return (<tr key={el + '__' + idx}>
        <td><Link className={'link-card'} el={el}
                  to={`/equipment/${idx + el.type}`}>{el.name}</Link>
        </td>
        <td>{el.type}</td>
        <td>{el.price}</td>
    </tr>)
}

export function renderArray(content) {
    return Array(4).fill((el) => < React.Fragment
        key={el + "sliderComponents"}>content</React.Fragment>)
        }

