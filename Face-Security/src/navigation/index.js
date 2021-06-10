//index.js
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthNavigation from './AuthNavigation'
import AppNavigator from './AppNavigation'

const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigation,
        App: AppNavigator
    },
    {
        initialRouteName: 'Auth'
    }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer