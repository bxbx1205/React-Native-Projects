import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.text}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.cardOne,styles.card]}>
                    <Text>RED</Text>
                </View>
                <View style= {[styles.cardTwo,styles.card]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.cardThree,styles.card]}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    headingText: {
        fontSize: 243,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'flex-start',
        flexDirection:'row',
        
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:5,
        margin:12
    },
    cardOne:{
        backgroundColor:'red'
    },
     cardTwo:{
        backgroundColor:'rgba(17, 255, 0, 0.79)'
    },
     cardThree:{
        backgroundColor:'rgba(44, 150, 255, 1)'
    }



})