import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function FancyCard(): React.ReactElement {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Trending places</Text>

            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://c.ndtvimg.com/2024-05/dj1d5a7o_mumbai-skyline-generic-istock_625x300_30_May_24.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307'
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />


                <View style={styles.overlay}>
                    <Text style={styles.title}>Mumbai</Text>
                    <Text style={styles.subtitle}>Lower Parel • Maharashtra</Text>
                    <Text style={styles.time}>750km away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: '#fff',
    },
    headingText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#222',
        marginBottom: 10,
    },
    card: {
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#eee',
        width: '100%',
    },
    cardElevated: {
        // Android elevation
        elevation: 4,
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    image: {
        width: '100%',
        height: 180,
    },
    overlay: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 12,
        backgroundColor: 'rgba(0,0,0,0.45)',
        padding: 10,
        borderRadius: 8,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    subtitle: {
        color: '#ffd9a8',
        fontSize: 12,
        marginTop: 2,
    },
    description: {
        color: '#fff',
        fontSize: 12,
        marginTop: 6,
    },
    time: {
        color: '#fff',
        fontSize: 12,
        marginTop: 8,
        opacity: 0.9,
    },
})