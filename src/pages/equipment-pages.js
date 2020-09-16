import React from 'react'
import TableComponent from '../components/table-component'
import {useSelector} from 'react-redux'

const EquipmentPages = () => {
    const {table, loading} = useSelector(({table, isLoaded}) => {
        return {
            table: table.equipment,
            loading: isLoaded
        }
    }
)

    return (
        <div className='wrapper'>
            <TableComponent tbody={table} loading={loading}/>
        </div>
    )
}
export default EquipmentPages