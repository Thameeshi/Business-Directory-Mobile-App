import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='home'
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({color})=>
        }}
        />
        <Tabs.Screen name='explore'
        options={{
          tabBarLabel:'Explore',
          tabBarIcon:({color})=>
        }}
        />
        <Tabs.Screen name='profile'
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color})=>
        }}
        />

    </Tabs>
  )
}
