import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  const goToUdPage = () => {
    navigation.navigate('UnderDev');
  };
  
  const goToSelectPage = () => {
    navigation.navigate('Select');
  };

  const goToProfilePage = () => {
    navigation.navigate('Profile');
  };

  const Button = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress} accessibilityRole="button">
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* User Profile Section */}
      <TouchableOpacity onPress={goToProfilePage}>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Deepak N</Text>
        </View>
      </TouchableOpacity>

      {/* On Campus Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>On Campus:</Text>
        <View style={styles.buttonContainer}>
          <Button title="G01" onPress={goToSelectPage} />
          <Button title="F11" onPress={goToSelectPage} />
        </View>
        <TouchableOpacity onPress={goToSelectPage} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={styles.viewMore}>view more</Text>
        </TouchableOpacity>
      </View>

      {/* Off Campus Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Off Campus:</Text>
        <View style={styles.buttonContainer}>
          <Button title="Volleyball Court" onPress={goToUdPage} />
          <Button title="Basketball Court" onPress={goToUdPage} />
        </View>
        <TouchableOpacity onPress={goToUdPage} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={styles.viewMore}>view more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDECE3',
    padding: 20,
  },
  profileSection: {
    marginTop:50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F9C4CC',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  viewMore: {
    color: '#333',
    fontStyle: 'italic',
    alignSelf: 'flex-end',
  },
});
