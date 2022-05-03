import React from 'react'
import {View, Text, SafeAreaView, StatusBar,Image, TextInput} from 'react-native'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import {COLOURS, SIZES} from '../constants';

const DietScreen = () => {
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
            <Text
                style={{
                    fontSize:32, 
                    lineHeight:65,
                    color: COLOURS.white,
                    lineHeight: 50,
                    paddingHorizontal: 10
                }}>
                Popular Diets
                </Text>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justfiyContent:'flex-start',
                    height: 50,
                    borderRadius:45,
                    backgroundColor: COLOURS.white,
                    marginVertical: 10,
                }}>    
                 <FontAwesome5Icons name="search" size={22} style={{marginHorizontal: 20}} />
                 <TextInput placeholder="Search" style={{flex:1}} />


                
                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justfiyContent:'flex-start',
                    height: 150,
                    borderRadius:45,
                    backgroundColor: COLOURS.white,
                    marginVertical: 5}}>
                    <Text style={{
                        paddingRight:15,
                        paddingLeft: 15
                    }}>
                    Keto Diet 
                    </Text>
                    <Text style={{
                        paddingRight:15,
                        paddingLeft: 15,
                        width: '75%'
                    }}>
                    The Keto diet is most commonly used as a weight loss tool. It constists of eating a very High fat diet with a very limited amount of carbs. It has been proven to be a very satiating diet which can help with cravings.
                    </Text>

               
                </View>
                
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justfiyContent:'flex-start',
                    height: 150,
                    borderRadius:45,
                    backgroundColor: COLOURS.white,
                    marginVertical: 10}}>
                    <Text style={{
                        paddingRight:15,
                        paddingLeft: 15
                    }}>
                    Int.F Diet
                    </Text>
                    <Text style={{
                        paddingRight:15,
                        paddingLeft: 15,
                        width: '75%'
                    }}>
                    Intermittent Fasting is most commonly used as an appetite control tool. It constists of eating within a certian time frame, usually an 8 hour window, and fasting for a 16 hour window. A modified 4 hour eating window with a 20 hour fast is also widely accepted.
                    </Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justfiyContent:'flex-start',
                    height: 150,
                    borderRadius:45,
                    backgroundColor: COLOURS.white,
                    marginVertical: 10}}>
                    <Text style={{
                        paddingRight:15,
                        paddingLeft: 15
                    }}>
                    Balanced 
                    </Text>
                    <Text style={{
                        paddingRight:15,
                        paddingLeft: 15,
                        width: '75%'
                    }}>
                    A Balanced Diet consists of a macro nutrient split, 50/25/25, a split between Carbohydrates, Proteins and Fats. This is the optimal ratio for individuals who works out a moderate amount.
                    </Text>
                </View>
    
    
            </View>
            
        </SafeAreaView>
        );
    };
    
export default DietScreen