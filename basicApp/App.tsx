import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaProvider>
    <ScrollView>
    <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
    </View>
    </ScrollView>
    </SafeAreaProvider>
  )
}

export default App