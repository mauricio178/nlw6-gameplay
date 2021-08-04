import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import AppointmentDetails from '../pages/AppointmentDetails'
import AppointmentCreate from '../pages/AppointmentCreate'
import Guilds from '../pages/Guilds';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes(){
    return (
        <Navigator
            headerMode="none" screenOptions={{cardStyle: {backgroundColor: theme.colors.secondary100}}}>
            <Screen 
                name="Home"    
                component={Home}/>
           
            <Screen 
                name="AppointmentDetails"    
                component={AppointmentDetails}/>
            
            <Screen 
                name="AppointmentCreate"    
                component={AppointmentCreate}/>
            
            <Screen 
                name="Guilds"    
                component={Guilds}/>
        </Navigator>
    )
}