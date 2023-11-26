const useLocalStorage = (key, value) => {
    if(key && value){
        localStorage.setItem(key, JSON.stringify(value))
    }
    else if(key){
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        }
        return null
    }
    return null
}

export default useLocalStorage