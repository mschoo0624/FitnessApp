import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Email: user@uic.edu</Text>
      <Text>Fitness Goals: Gain Muscle</Text>
      <Text>Preferred Workout Time: Morning</Text>

      <Button title="Edit Profile" onPress={() => navigation.navigate('settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});
