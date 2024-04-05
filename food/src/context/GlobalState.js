import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const GlobalContext = createContext(null)

const GlobalState = ({children}) => {

    const [searchParam,setSearchParam] = useState('')
    const [loading,setLoading] =useState(false)
    const [recipieList,setRecipieList] = useState([])
    const [recipeDetailsData,setRecipeDetailsData] = useState(null)
    const [favouritesList,setFavouritesList] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)

            const data = await res.json()
            console.log(data.data.recipes)
            if(data?.data?.recipes){
                setRecipieList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
                navigate('/')                
            }

        }catch(e){
            console.log(e)
            setLoading(false)
            setSearchParam('')
        }
       
    }

    const handleAddToFavorite = (getCurrentItem) => {
        console.log(getCurrentItem)
        let cpyFavouritesList = [...favouritesList]
        const index = cpyFavouritesList.findIndex(item => item.id === getCurrentItem.id)
        if(index === -1){
            cpyFavouritesList.push(getCurrentItem)
        }else{
            cpyFavouritesList.splice(index,1)
        }
        setFavouritesList(cpyFavouritesList)
        console.log(favouritesList)
        console.log(index)
    }

  return (
    <GlobalContext.Provider value={{searchParam,setSearchParam,handleSubmit,loading,recipieList,recipeDetailsData,setRecipeDetailsData,favouritesList,handleAddToFavorite}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState