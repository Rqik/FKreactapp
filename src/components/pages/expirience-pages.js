import React from 'react'

const ExpiriencePages = ()=>{
    return (
        <div className='wrapper'>
            <div className='exp'>
                <div className='exp-sidebar'>
                    <div className="filter-title">Внедренные решения</div>
                    <div className='comp-search'>
                        <input type="text"/>
                    </div>
                    <fieldset>
                        <legend>Внедрение по отраслям</legend>
                        <label className='category' ></label>
                    </fieldset>
                </div>
                <div className='exp-content'></div>
            </div>
        </div>
    )
}

export default ExpiriencePages