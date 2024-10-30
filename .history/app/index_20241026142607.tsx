import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return (
    <View>
      <Text>Redirecting to Home...</Text>
    </View>
  );
}

