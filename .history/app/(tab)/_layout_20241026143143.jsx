import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='Home'/>
        <Tabs.Screen name='explore'/>
        <Tabs.Screen name='profile'/>
    </Tabs>
  )
}
