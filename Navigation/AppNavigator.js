import MapScreen from '../Screens/MapScreens/MapScreen'
import LoginScreenUser from '../Screens/LoginScreens/LoginUser'
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
    Login: { screen: LoginScreenUser },
    Map: {
        screen: MapScreen,
    },
})

const Navigator = createAppContainer(StackNavigator)

export default Navigator;