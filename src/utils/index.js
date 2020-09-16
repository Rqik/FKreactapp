import React from 'react'

// let els = { element: 'text ele', index: '123'}
// let {se, ke} = {se: els, ke: els.index}
// console.log(se, ke)

const ItemExperience = ({element, index}) => {

    let {el, ind} = {el: element, ind: index}
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

export const renderItems = (exp) => {
    return (exp.map((el, ind) => <ItemExperience
        key={'experience_comp' + el.company + ind}
        element={el} index={ind}/>))
}

export function renderArray(content) {
    return Array(4).fill(content)
}

