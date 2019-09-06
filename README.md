# use-idle

> hook for detecting when a user is idle (wrapper around [activity-detector](https://www.npmjs.com/package/activity-detector))

[![NPM](https://img.shields.io/npm/v/use-idle.svg)](https://www.npmjs.com/package/use-idle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-idle
```

## Usage

```jsx
import React from "react";
import { useIdle } from "use-idle";

const Example = () => {
  const isIdle = useIdle();
  useEffect(() => {
    isIdle && alert("You've gone idle!");
  }, [isIdle]);

  return <div>Don't move a damn muscle.</div>;
};
```

## License

MIT © [@mayteio](https://github.com/@mayteio)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
