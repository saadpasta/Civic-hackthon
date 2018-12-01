import MapScreen from '../Screens/MapScreens/MapScreen'
import LoginScreenUser from '../Screens/LoginScreens/LoginUser'
import StartScreen from '../Screens/StartScreen.js/StartScreen'
import LoginScreenVendor from '../Screens/LoginScreens/LoginVendor'
import UserDashboardScreen from '../Screens/DashboardScreens/UserDashboard/UserDashboard'
import VendorDashboardScreen from '../Screens/DashboardScreens/VendorDashboard/VendorDashboard'

import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
    StartScreen:{screen:StartScreen},
    Login: { screen: LoginScreenUser },
    LoginVendor : {screen : LoginScreenVendor },
    Map: {
        screen: MapScreen,
    },
    UserDashboard:{screen:UserDashboardScreen},
    VendorDashboard:{screen:VendorDashboardScreen}
})

const Navigator = createAppContainer(StackNavigator)

export default Navigator;