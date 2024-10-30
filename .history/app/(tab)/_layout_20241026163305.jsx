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
        <Tabs.Screen name='explore'/>
        <Tabs.Screen name='profile'/>
    </Tabs>
  )
}
