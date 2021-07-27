import React from 'react'
import { useMyHook } from '@damengrandom/use-fetch-hook-trial'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App