import React, {useState} from 'react'
import './table-component.scss'
//отвечает только за отрисовку данных таблиц

// добавить функционал если данных нет
const TableComponent = ({tbody = {}, loading}) => {
    const [thead] = useState(['Название', 'Тип', 'Цена'])
    //data 2 елемента должен принимать название столбцов и строки с данными

    return (<>
        <table>

            <thead className='header-table'>
            <tr>
                {thead.map((el, index) => <td
                    key={'table' + el + index}>{el}</td>)}
            </tr>
            </thead>
            <tbody>
            {loading ? tbody.map((el, idx) => <tr key={el + '__' + idx}>
                <td>{el.name}</td>
                <td>{el.type}</td>
                <td>{el.price}</td>
            </tr>) : <tr>
                <td>Загрузка...</td>
            </tr>
            }

            </tbody>
        </table>
    </>)
}

export default TableComponent