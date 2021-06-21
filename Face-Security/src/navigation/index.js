//index.js
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AppNavigator from './AppNavigation'
import Login from '../screens/Login'


const SwitchNavigator = createSwitchNavigator(
    {
        Login: { screen: Login },
        App: AppNavigator
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer