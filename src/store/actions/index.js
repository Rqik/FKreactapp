const programLoaded = (newProgram) => {
    return {
        type: 'PROGRAMM_LOADED',
        payload: newProgram
    }
}

export {
    programLoaded
}