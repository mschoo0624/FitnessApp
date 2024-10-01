import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GetStartedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <Text>Welcome to the app! Let's set up your profile and get started with your fitness journey.</Text>
      <Button title="Create Profile" onPress={() => navigation.navigate('profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
});
