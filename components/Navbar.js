import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Navbar() {
    return (
        <View style={styles.containerNavbar}>
            <View style={styles.navbarTopSpacing}></View>
            <View style={styles.navbarMenu}>
                <Text style={styles.navbarMenuLogo}>GameSpace</Text>
                <Text style={styles.navbarMenuButton}>menu</Text>
            </View>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    navbarMenu: {
        width: '100%',
        height: 50,
        backgroundColor: '#000060',
        display: 'flex',
        flexDirection: 'row'
    },
    navbarMenuLogo: {
        color: '#FFFFFF',
        alignItems: 'center',
        fontSize: 35,
    },
    navbarTopSpacing: {
        height: 40,
        backgroundColor: '#FFFFFF'
    },
    navbarMenuButton: {
        // backgroundColor: 'red',
        color: '#FFFFFF',
        width: '100%',
        fontSize: 35,
        paddingLeft: 80
    }
});
