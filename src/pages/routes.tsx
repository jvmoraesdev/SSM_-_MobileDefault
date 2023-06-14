import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Login from './Login'
import ResetPassword from './ResetPassword'
import { COLORS } from '../assets/COLORS'

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false,
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: COLORS.BACKGROUND,
                    }
                }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="ResetPassword" component={ResetPassword} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;