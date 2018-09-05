import React,{Component} from 'react';
import{
    View,Text,StyleSheet,TouchableOpacity,
} from 'react-native'

export default class My extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                    <Text style={{color:'#6d716b'}}>我的</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    button:{
        width:120,
        height:45,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4398ff',
    }
})