import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import Navbar from './components/Navbar'

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>body</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
