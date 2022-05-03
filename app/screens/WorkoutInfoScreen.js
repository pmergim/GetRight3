import {View, Text, SafeAreaView, StatusBar, Image} from 'react-native'
import React, {useState} from 'react';
import {COLOURS, SIZES} from '../constants'


const WorkoutInfoScreen = ({route}) => {
        const [activity, setActivity] = useState(route.params.activity)
    return (
        <SafeAreaView style={{flex: 1, position: 'relative'}}>
        <StatusBar 
        backgroundColor={COLOURS.white + '30'}
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
                
        <Text style={{ fontSize:32, 
                lineHeight:65,
                color: COLOURS.white,
                lineHeight: 50,
                paddingHorizontal: 10}}>{activity.title}</Text>
        <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justfiyContent:'flex-start',
                    height: 100,
                    borderRadius:45,
                    backgroundColor: COLOURS.white,
                    marginVertical: 40}}>
                    <Text style={{color: COLOURS.black,fontSize: 18,paddingHorizontal:15}}>{activity.examples}</Text>

               
                </View>
        <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justfiyContent:'flex-start',
                    height: 240,
                    borderRadius:45,
                    backgroundColor: COLOURS.white,
                    marginVertical: -20}}>
                    <Text style={{color: COLOURS.black,fontSize: 18,paddingHorizontal:15}}>{activity.benefits}</Text>           
        </View>
        <Image
            source={activity.image}
            style={{
                position: 'absolute',
                bottom:100,
                right:0,
                width: 200,
                height:200,
                resizeMode: 'contain'
            }}
        />
        </View>
        </SafeAreaView>    
    )
}
export default WorkoutInfoScreen
