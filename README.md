# @metapasshq/msngr

a tiny utility to post to user-provided webhooks without worrying about platforms built for [@metapass](https://github.com/metapass)

platforms supported:

- [ ] slack
- [x] discord
- [ ] telegram

won't be adding new platforms myself because of current commitments but feel free to create PR **with a working test** to get it merged :)


### 1. install:

```
npm install @metapasshq/msngr
```

or

```
yarn install @metapasshq/msngr
```

### 2. use

```ts
// import
import { send } from "@metapasshq/msngr";

// declaring webhook
const webhook = "https://discord.com/api/webhooks/987654321/abcdefghijklmnopqrstuvwxyz";

// send
await send(webhook, "Hello World!");
```


## contributing:
feel free to open PRs for any new feature/bug fixes

some things on the top of my head:
- [ ] integrate testing into workflows
- [x] support for rich embeds (maybe?)
- [ ] support for attachments (maybe?)