// export const myGetter = (state) => {
//  return state
// }

export const getEntriesByTerm = (state) => (term = '') => {
    if (term.length > 0) {
        return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
    } else {
        return state.entries
    }
}

export const getEntryById = (state) => (id = '') => {
    const entry = state.entries.find(entry => entry.id === id)
    
    if (!entry) return
    
    return {...entry}
}