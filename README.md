# @damengrandom/use-fetch-hook-trial

> a trial for creating a custom fetch hook

[![NPM](https://img.shields.io/npm/v/@damengrandom/use-fetch-hook-trial.svg)](https://www.npmjs.com/package/@damengrandom/use-fetch-hook-trial) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @damengrandom/use-fetch-hook-trial
```

## Usage

```jsx
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
```

## License

MIT © [DamengRandom](https://github.com/DamengRandom)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
