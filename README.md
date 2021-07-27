# @damengrandom/use-fetch-hook-trial

> a trial for creating a custom fetch hook

[![NPM](https://img.shields.io/npm/v/@damengrandom/use-fetch-hook-trial.svg)](https://www.npmjs.com/package/@damengrandom/use-fetch-hook-trial) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @damengrandom/use-fetch-hook-trial
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@damengrandom/use-fetch-hook-trial'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [DamengRandom](https://github.com/DamengRandom)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
