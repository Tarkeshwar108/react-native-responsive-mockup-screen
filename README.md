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
## Example
```js
import {
  widthPixelToDp,
  heightPixelToDp,
} from 'react-native-responsive-mockup-screen';

const figmaScreenWidth=1024;
const figmaScreenHeight=1366;
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height:  heightPixelToDp(67,figmaScreenHeight), 
    width: widthPixelToDp(200,figmaScreenWidth)   
  },
  myText: {
    fontSize: heightPixelToDp(24,figmaScreenHeight)
  }
});

export default Login;
```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
