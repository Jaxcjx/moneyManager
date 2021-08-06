import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Home } from "./Frontend/screens";
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
        "Roboto-Black" : require('./Frontend/assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./Frontend/assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./Frontend/assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
        return null;
    }
    
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;