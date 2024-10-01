import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';

// Replace with your actual backend URL
const socket = io('http://your-backend-url');

export default function GroupChatScreen({ route }) {
  const { groupId, userName } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Join the group when the component mounts
    socket.emit('joinGroup', groupId);

    // Listen for incoming group messages
    socket.on('groupMessage', ({ sender, message }) => {
      setMessages(prevMessages => [...prevMessages, { sender, message }]);
    });

    // Clean up the connection when the component unmounts
    return () => {
      socket.off('groupMessage');
    };
  }, [groupId]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('groupMessage', { groupId, message, sender: userName });
      setMessage(''); // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.sender}>{item.sender}:</Text>
            <Text>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
        style={styles.input}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  message: { marginVertical: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
  sender: { fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
});
