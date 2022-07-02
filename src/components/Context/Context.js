import React, {createContext,useState,useCallback} from 'react';
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({children}) => {
    const [meals,setMeals]=useState([]);
    const [categories,setCategories] = useState([]);
    const [randomMeal,setRandomMeal] = useState([])
    
    const fetchHomePageMeals = useCallback((searchTerm) =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res=>{
            console.log(res.data)
        })
    })
    return <myContext.Provider value={{fetchHomePageMeals}}>{children}</myContext.Provider>
}