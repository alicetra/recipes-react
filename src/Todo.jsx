import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchrecipe } from './redux/recipeSlicer'

const Todo = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.recipe)
    useEffect(() => {
        dispatch(fetchrecipe())
    }, [])
    console.log(data)
  return (
    <div>
{
data.isLoading ? <h1>Loading...</h1>:
<ul>
        {data.data.recipes.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
</ul>
}
    </div>
  )
}

export default Todo