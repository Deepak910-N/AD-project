import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UnderDevelopmentScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150/FFDDDD/333333?text=Under+Development' }}
        style={styles.image}
      />
      <Text style={styles.title}>Page Under Development</Text>
      <Text style={styles.message}>We are working hard to make this page available soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDECE3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
