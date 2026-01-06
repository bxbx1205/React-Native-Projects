import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaProvider>
    <ScrollView>
    <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
    </View>
    </ScrollView>
    </SafeAreaProvider>
  )
}

export default App