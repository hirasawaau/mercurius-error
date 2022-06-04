# mercurius-error

Mercurius Error wrapper that inspired from [Apollo Server Error](https://www.apollographql.com/docs/apollo-server/data/errors/)

## Install

```
npm install mercurius-error
```

## Example

```ts
import { UserInputError } from 'mercurius-error'

const resolvers = {
  Query: {
    hello: () => {
      throw new UserInputError('Invalid input')
    },
  },
}
```

## Warnning

All Expections return http code 200 that inspired from Apollo Server Error.
