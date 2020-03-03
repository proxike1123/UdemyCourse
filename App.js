import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import ListScrene from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';
import CounterScreen from './src/screens/CounterScreen';
import SquareScreen from './src/screens/SquareScreen';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator (
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    List: {
      screen: ListScrene,
    },
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(navigator);