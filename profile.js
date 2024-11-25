import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg',
        }}
        style={styles.profileImage}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Deepak N</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Register No:</Text>
        <Text style={styles.value}>311122104029</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>College:</Text>
        <Text style={styles.value}>Loyola ICAM College of Engineering and Technology</Text>
      </View>
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20, // Adds space between the image and the profile details
  },
  card: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#F9C4CC',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});
