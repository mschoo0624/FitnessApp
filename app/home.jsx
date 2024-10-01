import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Latest News</Text>
      <View style={styles.newsItem}>
        <Text>UIC Rec Center New Programs</Text>
        <Text style={styles.date}>October 10, 2024</Text>
      </View>
      <View style={styles.notifications}>
        <Text style={styles.title}>Notifications</Text>
        <Text>- You have 2 new matches.</Text>
        <Text>- You received a new message.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  newsItem: { marginBottom: 20 },
  date: { color: 'gray' },
  notifications: { marginTop: 20, borderTopWidth: 1, paddingTop: 20 },
});
