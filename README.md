
Negate-ts is a TypeScript library that provides a simple and intuitive way to perform logical negation of boolean values. It is designed to be flexible and reliable, and can be used in a variety of contexts.

## Installation
```bash
npm install negate-ts
```

## Usage
```typescript
import { not } from 'negate-ts';

not(true); // false
not(false); // true
```

## Why?
Read this beautiful code:
```typescript
if(not(havePermission)) {
  // do something
}
```
You can say "not" to your code, and it will be more readable.
Try this:
```typescript
if(!havePermission) {
  // do something
}
```
It's not the same, right?
How you can say "!" to your code? You can't. You can only say "not".

## License

Released under the MIT License.

Copyright (c) 2023 Thiago da Silva Teixeira
