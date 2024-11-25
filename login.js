import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (studentId === '311122104029' && password === 'licet@123') {
      navigation.navigate('Home');  // Navigate to Home screen directly after login
    } else {
      Alert.alert('Invalid Credentials', 'Please enter the correct Student ID and Password');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SLOTIFY*</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Student Register Number"
        placeholderTextColor="#5A5A5A"
        onChangeText={setStudentId}
        value={studentId}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#5A5A5A"
        onChangeText={setPassword}
        value={password}
      />
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="small" color="#333" />
        ) : (
          <Text style={styles.loginButtonText}>Log in</Text>
        )}
      </TouchableOpacity>

      {/* Teacher Login */}
      <TouchableOpacity 
        style={styles.teacherLoginButton} 
        onPress={() => navigation.navigate('UnderDev')} // Navigate to UnderDev screen for Teacher Login
      >
        <Text style={styles.teacherLoginButtonText}>Teacher Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFCCCC',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFDDDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#CCFFCC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  teacherLoginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#CCFFCC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  teacherLoginButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
