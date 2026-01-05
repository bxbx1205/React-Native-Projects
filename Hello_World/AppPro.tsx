import React from "react";

import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

function AppPro(){

    const myName = "sarvesh_bxbx"

    return(
        <View style={styles.container}>
            
            <Text style={styles.helloText}>
                Hello World! 🌍
            </Text>

            <Text style={styles.footerText}>
                Made with ❤️ by bxbx
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },

    helloText:{
        fontSize: 42,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },

    nameText:{
        fontSize: 24,
        color: '#666',
        marginBottom: 20,
    },

    emojiText:{
        fontSize: 32,
        marginBottom: 30,
    },

    box:{
        backgroundColor: '#4CAF50',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },

    boxText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    footerText:{
        fontSize: 14,
        color: '#999',
    },

})

export default AppPro;
