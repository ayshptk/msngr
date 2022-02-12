# @ayshptk/msngr

a tiny utility to post to user-provided webhooks without worrying about platforms built for [@raiddotfarm](https://github.com/raiddotfarm)

platforms supported:

- [x] slack
- [x] discord

won't be adding new platforms myself because of current commitments but feel free to create PR **with a working test** to get it merged :)


### 1. install:

```
npm install @ayshptk/msngr
```

or

```
yarn install @ayshptk/msngr
```

### 2. use

```ts
// import
import { send } from "@ayshptk/msngr";

// declaring webhook
const webhook = "https://discord.com/api/webhooks/987654321/abcdefghijklmnopqrstuvwxyz";

// send
await send(webhook, "Hello World!");
```

