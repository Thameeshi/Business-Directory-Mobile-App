import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='home'
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({color})=><Entypo name="home" size={24} color={color} />
        }}
        />
        <Tabs.Screen name='explore'
        options={{
          tabBarLabel:'Explore',
          tabBarIcon:({color})=><FontAwesome name="search" size={24} color="black" />
        />
        <Tabs.Screen name='profile'
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color})=><Entypo name="people-circle" size={24} color={color} />
        }}
        />
    </Tabs>
  )
}
