import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

export default function ContactList() {
    const contacts = [
        { uid: 1, name: "Rohit Sharma", status: "Building cool stuff with code 💻", imageUrl: "https://i.pravatar.cc/150?img=1" },
        { uid: 2, name: "Ananya Verma", status: "Design. Develop. Deploy.", imageUrl: "https://i.pravatar.cc/150?img=2" },
        { uid: 3, name: "Kunal Mehta", status: "Coffee + Code = ❤️", imageUrl: "https://i.pravatar.cc/150?img=3" },
        { uid: 4, name: "Sneha Patil", status: "Turning ideas into apps 🚀", imageUrl: "https://i.pravatar.cc/150?img=4" },
        { uid: 5, name: "Aman Gupta", status: "Debugging life one bug at a time", imageUrl: "https://i.pravatar.cc/150?img=5" },
        { uid: 6, name: "Priya Nair", status: "Frontend vibes only ✨", imageUrl: "https://i.pravatar.cc/150?img=6" },
        { uid: 7, name: "Rahul Khanna", status: "Backend is my playground", imageUrl: "https://i.pravatar.cc/150?img=7" },
        { uid: 8, name: "Neha Singh", status: "Learning React Native 📱", imageUrl: "https://i.pravatar.cc/150?img=8" },
        { uid: 9, name: "Arjun Malhotra", status: "APIs over coffee ☕", imageUrl: "https://i.pravatar.cc/150?img=9" },
        { uid: 10, name: "Kavya Iyer", status: "Ship fast. Learn faster.", imageUrl: "https://i.pravatar.cc/150?img=10" },
    ]

    return (
        <View style={styles.screen}>
            <Text style={styles.headingText}>Contacts</Text>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{ uri: imageUrl }} style={styles.userImage} />
                        <View style={styles.textWrap}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus} numberOfLines={1}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f2f4f8',
        paddingTop: 12,
    },
    headingText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#0f1724',
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    contentContainer: {
        paddingHorizontal: 12,
        paddingBottom: 24,
    },
    userCard: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 4,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 3,
    },
    userImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
        marginRight: 12,
    },
    textWrap: {
        flex: 1,
        justifyContent: 'center',
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0b1220',
    },
    userStatus: {
        fontSize: 13,
        color: '#6b7280',
        marginTop: 4,
    },
})
