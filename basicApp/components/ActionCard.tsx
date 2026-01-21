import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>night in Mumbai</Text>
            <View style={styles.card}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>A stylish evening</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://i.redd.it/4sz89b0n6ot61.jpg' }}
                    />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={3} style={styles.bodyText}>
                            Dolor sit amet consectetur adipisicing elit. Dicta at voluptates aliquid pariatur nobis possimus! Quam error pariatur ab et provident voluptas?
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => openWebsite('https://www.aqi.in/in/dashboard/india/maharashtra/nagpur')}
                        >
                            <Text style={styles.buttonText}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f2f4f8'
    },
    headingText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 12,
        textAlign: 'left'
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 14,
        padding: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 6
    },
    headerContainer: {
        alignItems: 'flex-start'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 12
    },
    bodyContainer: {
        marginBottom: 12
    },
    bodyText: {
        color: '#475569',
        fontSize: 14,
        lineHeight: 20
    },
    footerContainer: {
        width: '100%',
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600'
    }
})