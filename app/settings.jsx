import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Change Password" onPress={() => { /* Handle password change */ }} />
      <Button title="Notification Preferences" onPress={() => { /* Handle notifications */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});
