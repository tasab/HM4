const STORAGE_KEY = 'item'
export const setStorage = (inputItems) =>{
    const todoStringified = JSON.stringify(inputItems)
    localStorage.setItem(STORAGE_KEY, todoStringified)
}
export const getStorage = () => {
    const itemsFromStorage = localStorage.getItem(STORAGE_KEY)
    const itemsParsed = JSON.parse(itemsFromStorage)
    return itemsParsed
}