import React,{Component} from 'react';
import{
    View,Text,StyleSheet,TouchableOpacity,
} from 'react-native'
import {SearchBar} from "react-native-elements";

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    round
                    placeholder='Type Here...'
                    containerStyle={{backgroundColor:'#63be45',paddingTop:20}}
                    inputStyle={{color: '#0f0f0f',backgroundColor: 'white',width:400}}
              />
                <View style={styles.tab}>
                    <Text style={styles.head}>动态</Text>
                    <Text style={styles.head}>最热</Text>
                </View>

            </View>

        )
    }
}

 const styles = StyleSheet.create({
     container:{
         flex:1,
         alignItems:'center',
         backgroundColor:'#ffffff',
     },
     tab:{
         top:-1,
         width:420,
         height:45,
         borderRadius:5,
         flexDirection:"row",
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#63be45',
     },
     head:{
         margin:15,
         fontSize:15,
         color:'white'
     }
 })