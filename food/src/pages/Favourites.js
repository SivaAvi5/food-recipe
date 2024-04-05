import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import RecipieItem from './components/RecipieItem'

const Favourites = () => {
  const {favouritesList} = useContext(GlobalContext)
  console.log(favouritesList,'ss')
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (favouritesList.map((item) => <RecipieItem item={item} />)):(
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favourites
          </p>
        </div>
      )}
    </div>
  )
}

export default Favourites