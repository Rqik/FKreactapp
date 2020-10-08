import React from 'react'
import {ProgramContext} from '../program-context'

const widthProgramStoreService = () => (Wrapper) => {
    return (props) => {
        return (
            <ProgramContext.Consumer>
                {
                    (programStoreService) => {
                        return (
                            <Wrapper
                                {...props}
                                programmStoreService={programStoreService}/>
                        )
                    }

                }
            </ProgramContext.Consumer>
        )
    }
}

export default widthProgramStoreService