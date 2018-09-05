/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image,Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './src/components/Home'
import Group from './src/components/Group'
import My from './src/components/My'
import BookAndMore from './src/components/BookAndMore'
import SearchInput from './src/components/SearchInput'

export default  createBottomTabNavigator({

        Home:{
            screen:Home,
            navigationOptions:{
                tabBarLabel:"首页",
                tabBarIcon:({tintColor})=>(
                    <Icon  name="ios-home" size={32} color={'gray'} style={tintColor}/>
                )
            }
        },
        BookAndMore:{
            screen:BookAndMore,
            navigationOptions:{
                tabBarLabel:"书影音",
                tabBarIcon:({tintColor})=>(
                    <Icon  name="ios-locate" size={32} color="gray" style={tintColor}/>
                )
            }
        },
        Group:{
            screen:Group,
            navigationOptions:{
                tabBarLabel:"小组",
                tabBarIcon:({tintColor})=>(
                    <Icon  name="ios-planet" size={32} color="gray" style={tintColor}/>
                )
            }
        },
        My:{
            screen:My,
            navigationOptions:{
                tabBarLabel:"我的",
                tabBarIcon:({tintColor})=>(
                    <Icon  name="ios-person" size={32} color="gray" style={tintColor}/>
                )
            }
        },

    },
    {
        tabBarPosition:'bottom',
        animationEnabled:true,
        swipeEnabled:true,
        backBehavior:"none",

        tabBarOptions:{
            upperCaseLabel:false,
            showIcon:true,
            showLabel:true,
            activeTintColor:'#05a932',
            style:{
                backgroudColor:"white",
                height:55,
                color:"#05a932"
            },
            indicatorStyle:{
                height:0
            },
            labelStyle:{
                fontSize:12,
                marginTop:-5,
                marginBottom:5,
            },
            iconStyle:{
                marginBottom:5,
            }

        }
    })


