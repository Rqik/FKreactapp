import React from 'react'
import {ProgrammContextConsumer} from '../program-context'

const widthProgrammstoreService = () => (Wrapper) => {
    return (props) => {
        return (
            <ProgrammContextConsumer>
                {
                    (programmStoreService) => {
                        return (
                            <Wrapper
                                {...props}
                                programmStoreService={programmStoreService}/>
                        )
                    }

                }
            </ProgrammContextConsumer>
        )
    }
}

export default widthProgrammstoreService