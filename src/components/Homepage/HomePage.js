import React,{useState,useEffect, useContext, useCallback} from 'react'
import './HomePage.scss'
import { myContext } from '../Context/Context'

const HomePage = () => {
  const[searchTerm,setSearchTerm]= useState("")

  const {fetchHomePageMeals} = useContext(myContext)

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm)
  },[searchTerm,fetchHomePageMeals])

  return (
    <div className='home'>
      <div className='home-search'>
        <input 
        type='text' 
        placeholder='type a meal name...'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
      <div className='home-meals'>

      </div>
    </div>
  )
}

export default HomePage