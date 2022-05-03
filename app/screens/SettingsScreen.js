import React from 'react'
import {View, Text, SafeAreaView, StatusBar,Image, TextInput} from 'react-native'
import {COLOURS, SIZES} from '../constants';


const SettingsScreen = () => {
    

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
            My Profile
            </Text>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height: 50,
                borderRadius:45,
                backgroundColor: COLOURS.white,
                marginVertical: 20,
            }}>    
 
             <TextInput placeholder="First Name" style={{flex:1,marginHorizontal: 22 }} />
            
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height: 50,
                borderRadius:45,
                backgroundColor: COLOURS.white,
                marginVertical: 0,
            }}>    
 
             <TextInput placeholder="Second Name" style={{flex:1,marginHorizontal: 22 }} />
            
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height: 50,
                borderRadius:45,
                backgroundColor: COLOURS.white,
                marginVertical: 20,
            }}>    
 
             <TextInput placeholder="Weight/kg" style={{flex:1,marginHorizontal: 22 }} />
            
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height: 50,
                borderRadius:45,
                backgroundColor: COLOURS.white,
                marginVertical: 0,
            }}>    
 
             <TextInput placeholder="Gender" style={{flex:1,marginHorizontal: 22 }} />
             
            
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height: 50,
                borderRadius:45,
                backgroundColor: COLOURS.white,
                marginVertical: 20,
            }}>    
 
             <TextInput placeholder="Aims and Goals" style={{flex:1,marginHorizontal: 22 }} />
             
            
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height: 150,
                borderRadius:45,
                backgroundColor: COLOURS.white,
                marginVertical: 0
            }}>    
 
             <TextInput placeholder="Import Photos or Videos" style={{flex:1,marginHorizontal: 22 }} />
            
            </View>



        </View>
    </SafeAreaView>
    );
}

export default SettingsScreen
