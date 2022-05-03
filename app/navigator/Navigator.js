import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WorkoutInfoScreen,WorkoutScreen,MeditationScreen,DietScreen,SettingsScreen} from '../screens';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import {COLOURS} from '../constants';
import {Text} from 'react-native';



const Stack = createStackNavigator();
const StackNavigator = () => {
    return( 
        <Stack.Navigator headerMode="false" >
            <Stack.Screen name = "WorkoutScreen" component={WorkoutScreen} />
            <Stack.Screen name ="WorkoutInfoScreen" component={WorkoutInfoScreen} />                 
       </Stack.Navigator>      
    );
};
  
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 65,
            },         
            }}
            
            initialRouteName="BottomTab"      
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    const icons ={
                        Meditation: 'brain',
                        Workout: 'dumbbell',
                        Diets: 'utensils',
                        Settings: 'user'
                    };
                    return (
                        <FontAwesome5Icons 
                        name={icons[route.name]} 
                        color={focused? COLOURS.lightblue + '40': COLOURS.black}
                        style={{
                            fontSize: 22,
                            opacity: focused ? 1 : 0.5,
                        }}
                        />
                    )
                },
                
                
                tabBarLabel: ({focused}) => {
                    const labels = {
                        Meditation: 'Meditation',
                        Workout: 'Workout',
                        Diets: 'Diets',
                        Settings: 'Profile'

                    };
                    return (
                    <Text 
                      style={{ 
                        color: focused? COLOURS.lightblue + '40' : COLOURS.black,
                        marginBottom: 10,
                        opacity: focused? 1: 0.6,
                        fontWeight: 'bold',
                      

                    }}>
                    {labels[route.name]}
                    </Text>
                    );


                }
            })}
            >
            <Tab.Screen name="Meditation" component={MeditationScreen}/>
            <Tab.Screen name="Workout" component={StackNavigator}/>
            <Tab.Screen name="Diets" component={DietScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );

};

export default BottomTabNavigator;

