import React from 'react'
import {View, Text, SafeAreaView, StatusBar,Image,FlatList, TouchableOpacity, Navigation} from 'react-native'
import {COLOURS, SIZES} from '../constants';

let activity  = [
    {
        title: 'Info',
        image: require('../assets/InfoIcon.png'),
        examples: 'Workouts can improve both Physical and Mental health, they also promote longevity and long term health',
        benefits:
        'Individuals with less workout experience will need to workout with caution. Over exerting yourself when you are only just starting to workout can result in injuries which may inhibit you doing workouts in the future. A slow and gradual start to working out is essential for both short and long term health.  ',
        
    },
    {
        title: 'Home Workout',
        image: require('../assets/HomeWorkoutIcon.png'),
        examples: 'Example exercises include: Push ups, Sit ups, Jumping jacks, Planks',
        benefits:
        'A Home Workout can provide ample of beneifts without the use of a single piece of equpiment. Home workouts are usually high-intensity which helps with strengthening the cardiovascular system. With the correct Workout plan, it is also possible to develop an additional muscle mass as well as strength.',
        
    } ,
    {
        title: 'Cardio Workout',
        image: require('../assets/CardioWorkoutIcon.png'),
        examples: 'Example exercises include: Sprints, Jogging, Cycling, Outdoor Sports ',
        benefits:
        'Cardio workouts are very good for building endurance as well as a stronger heart. Cardio workouts are naturally much safer to do than any of the other workouts, however can provide just as many benefits. Cardiovasulcar workouts have proven to improve sypmtoms of both anxiety and depression.',
        
    },
    {
        title: 'Weight Training',
        image: require('../assets/WeightTrainingIcon.png'),
        examples: 'Example exercises include: Bench Press, Bicep curls, Squats, Deadlifts',
        benefits:
        'Weight training is most commonly used to build muscle as well as strength, weight training exercises such as the compound lifts which include, Bench Press, Deadlifts and Squats build general strenght throughout the body which can significantly help with day to day activities and posture.',
        
        }
];
 const WorkoutScreen = ({navigation}) => {
    
    const ActivityItem = ({activity}) => {
        return(
            <TouchableOpacity
                onPress={() => navigation.navigate('WorkoutInfoScreen', {activity : activity})}
                activeOpacity={0.8}
                style={{
                    backgroundColor: COLOURS.white,
                    width: 0.5 * SIZES.width - 42,
                    margin:5,
                    height:170,
                    borderRadius: 10,
                    padding: 15,
 
                }}>
                <Image source={activity.image} 
                    style={{
                    height: '100%',
                    width: '100%',
                    resizeMode:'contain',
                    flex: 1,

                    }}
                    />
                <Text style= {{marginTop: 20, textAlign:'center',fontSize:16,color: COLOURS.black + 90}}>
                    {activity.title}

                </Text>    
            </TouchableOpacity>
    
        );
    };

    return (
        <SafeAreaView style={{flex: 1, position: 'relative'}}>
        <StatusBar 
        backgroundColor={COLOURS.white }
        barStyle="dark-content"
        animated={true}
        />
        <View
            style={{
                width: '100%',
                height: 1 * SIZES.height,
                padding:30,
                backgroundColor: COLOURS.lightblue +'40',
                position: 'relative'

            }}>
            
            <Text
            style={{
                fontSize:32, 
                lineHeight:65,
                color: COLOURS.white,
                lineHeight: 50,
                paddingHorizontal: 10
            }}>
            Workout Types
            </Text>
            
            <FlatList
                data={activity}
                style = {{
                    paddingHorizontal: 0,
                    paddingVertical: 85,


                }}
                contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.title}
                renderItem={({item}) => <ActivityItem activity={item}/>}
            />


        </View>
    </SafeAreaView>
    );
};
export default WorkoutScreen