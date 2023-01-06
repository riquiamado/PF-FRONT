import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoreValue] = useState(()=>{
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoreValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

export default useLocalStorage