# react-native-responsive-mockup-screen

react-native-responsive-mockup-screen is a small library that provide 2 simple method so that react native developer can code their UI elements fully responsive as per their mockup design.No media query needed.

## Installation

```sh
npm install react-native-responsive-mockup-screen

or

yarn add react-native-responsive-mockup-screen

```

## Usage

```js
import {
  widthPixelToDp,
  heightPixelToDp,
} from 'react-native-responsive-mockup-screen';

// ...
let wireFrameWidth = 1024;  // Figma screen width with which UI is designed.
let wireFrameHeight = 1366; // Figma screen height with which UI is designed.
const result1 =  widthPixelToDp(67, wireFrameWidth);
const result2 =  heightPixelToDp(100, wireFrameHeight);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
