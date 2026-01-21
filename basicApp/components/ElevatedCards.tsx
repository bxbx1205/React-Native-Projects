import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={[styles.headingText]}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={[styles.container]}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                tap
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                to
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                scroll
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                more
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                YOOOO
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
     headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'rgba(255, 255, 255, 1)',
    },
    card:{
        width:100,
        height:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:5,
        margin:12

    },
    cardElevated:{
        backgroundColor:'#CAD5E2'
    },
    container:{
        padding:8,
        elevation:12,
        
    },
})