import React from 'react'
import { 
    Text, 
    View,
    StyleSheet, 
    SafeAreaView, 
} from 'react-native'


import HeaderTabs from '../../src/components/headerTabs/headerTabs'

const Home = () => {
  return (
    <SafeAreaView>
      <HeaderTabs/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})