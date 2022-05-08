import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Contact = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Contact Screen!</Text>
  </View>
)

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='Contact' component={Contact} />
    </Stack.Navigator>
  )
}

export default ContactStackNavigator