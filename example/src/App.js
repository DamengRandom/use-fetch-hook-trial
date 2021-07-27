import React from 'react'
import { useFetchQuote } from '@damengrandom/use-fetch-hook-trial'

const App = () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/todos/1'
  const { quote, loading } = useFetchQuote(endpoint)

  if (loading) return <p>Loading ..</p>

  return (
    <div>
      <p><quote>{quote}</quote></p>
    </div>
  )
}
export default App
