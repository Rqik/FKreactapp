import React from 'react'
import TableComponent from '../components/table-component'
import {useDispatch, useSelector} from 'react-redux'
import {tableDataLoadAction} from '../store/actions'

const EquipmentPages = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(tableDataLoadAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {table, loading} = useSelector(({table, isLoaded}) => {
            return {
                table: table.equipment,
                loading: table.isLoaded
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