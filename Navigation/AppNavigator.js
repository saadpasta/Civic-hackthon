import MapScreen from '../Screens/MapScreens/MapScreen'
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
    Map: {
        screen: MapScreen,
    },
})
  
const Navigator = createAppContainer(StackNavigator)

export default Navigator