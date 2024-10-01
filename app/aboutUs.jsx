import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

export default function AboutUsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text>This app helps UIC students find workout partners, track fitness progress, and get motivated!</Text>
      <Button title="Visit Our Website" onPress={() => Linking.openURL('https://yourwebsite.com')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
});
