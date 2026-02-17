import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SongPlayerScreen from '../screens/SongPlayerScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: { backgroundColor: '#1E1E1E' },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SongPlayer" component={SongPlayerScreen} options={({ route }) => ({ title: route.params.song.title })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
