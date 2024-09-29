import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text>Welcome to Fitness App</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'black'}}>Go to Profile</Link>
    </View>
  );
}
