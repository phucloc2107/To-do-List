import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import TodoScreen from '../screens/TodoScreen';
import UserScreen from '../screens/UserScreen';
import ExitScreen from '../screens/ExitScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Todo' />
        <BottomNavigationTab title='Cá nhân' />
        <BottomNavigationTab title='Đăng xuất' />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Screen name='todo' component={TodoScreen} />
        <Screen name='user' component={UserScreen} />
        <Screen name='exit' component={ExitScreen} />
    </Navigator>
);

export default TabNavigator;
