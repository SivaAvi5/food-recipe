import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import RecipieItem from './components/RecipieItem'

const Home = () => {

  const {recipieList,loading} = useContext(GlobalContext)

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipieList && recipieList.length > 0 ? (recipieList.map((item) => <RecipieItem item={item} />)):(
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  )
}

export default Home