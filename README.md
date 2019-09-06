# use-idle

> hook for detecting when a user is idle

[![NPM](https://img.shields.io/npm/v/use-idle.svg)](https://www.npmjs.com/package/use-idle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-idle
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-idle'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [@mayteio](https://github.com/@mayteio)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
