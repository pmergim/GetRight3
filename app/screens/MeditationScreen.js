import React, {useState, useEffect} from 'react';
import {Dimensions, View, Text, SafeAreaView, StatusBar,Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOURS, SIZES} from '../constants';


const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time/60);
    const secs = time- mins*60;
    return { mins: formatNumber (mins), secs: formatNumber (secs)};
}

const MeditationScreen = () => {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const {mins, secs} = getRemaining(remainingSecs)

    const reset= () => {
        setRemainingSecs(0);
        setIsActive(false);    
    }
    const toggle = () => {
    setIsActive(!isActive)
    }
    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1);
         }, 1000)
        } else if (!isActive && remainingSecs !== 0){
          clearInterval(interval)
        }      
        return () => clearInterval(interval);
        },[isActive, remainingSecs])





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
            Meditation and mindfulness
            </Text>

            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height: 200,
                width:200,
                borderRadius:180,
                backgroundColor: COLOURS.white,
                right: -150,
                top: -10            
            }}>    
            <Image
                source={require('../assets/meditationIconn.png')}
                style={{
                    position:'absolute',
                    top:20,
                    left: 25,
                    height: 150,
                    width :150
            
                }}          
            />            
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height:100,
                width: '100%',
                borderRadius:45,
                backgroundColor: COLOURS.white,
                top: 200
                  
            }}>    
           <Text style={{
                paddingRight:10,
                paddingLeft: 25,
                width: '100%'}}> 
             Hot Tip: Breathe naturally. Meditation does involve focusing on the breath and using it as an anchor for the mind, but try not to think about the breath or alter it in any way. Simply allow things to unfold naturally.

            </Text>
  
             </View>
             <View style={{
                flexDirection:'row',
                alignItems:'center',
                justfiyContent:'flex-start',
                height:70,
                width: '100%',
                borderRadius:45,
                backgroundColor: COLOURS.white,
                top: 10
                  
            }}>    
                <Text style={{
                     paddingRight:10,
                     paddingLeft: 70,
                     width: '100%'}}> 
                 Beginner: 1-2 Mins per session{"\n"}
                 Intermidiate: 4-5 Mins per session{"\n"}
                 Expert: 10-20 Mins per session
           
                </Text>
            </View>
        
            
         <View style = {styles.container}>
                <Text style={styles.timerText}>{`${mins}:${secs}`} </Text>
         
                <TouchableOpacity onPress={toggle} style={styles.button}>
                    <Text style= {styles.buttonText}>{isActive? 'Pause' : 'Start'}</Text>   
                 </TouchableOpacity>
        
                 <TouchableOpacity onPress={reset} style={[styles.button, styles.buttonReset]}>
                    <Text style= {[styles.buttonText, styles.buttonTextReset]}>Reset</Text>   
                </TouchableOpacity>      
        </View>
        
        </View>
    </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    
    container:
    {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
    top: -40
    },
    
    button: 
    {
    borderWidth: 5,
    borderColor: COLOURS.white,
    width: SIZES.width/4,
    height: SIZES.width/4,
    borderRadius: SIZES.width/2,
    alignItems: 'center',
    justifyContent: 'center',
    left:-90,
    top: -158
    },

    buttonText: 
    {
        fontSize: 20,
        color: COLOURS.white,
        alignItems: 'center'
    },
    
    timerText:
    {
    color: COLOURS.white,
    fontSize: 30,
    marginBottom:20,
    left: -30, 
    top: -150
    },

    buttonReset:
    {
      marginTop: 20,
      borderColor: COLOURS.white,  
      left: 20,
      top: -280
    },
    
    buttonTextReset:
    {
        color: COLOURS.white
    }

})
export default MeditationScreen