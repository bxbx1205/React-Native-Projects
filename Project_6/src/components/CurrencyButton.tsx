import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps=PropsWithChildren<{
    name:string;
    flag:string;
}>

export const CurrencyButton = (props:CurrencyButtonProps)=>{
return(

    <View style={[styles.buttonContainer]}>
        <Text>{props.flag}</Text>
        <Text>{props.name}</Text>
    </View>
)

}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
    },
    flag:{
        fontSize:27,
        color:"#FFFF",
        marginBottom:4,
    },
    country:{
        fontSize:27,
        color:"#9d1717",
    }
})