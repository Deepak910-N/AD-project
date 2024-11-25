import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function VerifyScreen() {
  const route = useRoute();  // To access the passed parameters
  const navigation = useNavigation();

  const { selectedTime, roomName } = route.params;  // Get the selected time and room name passed from TimeSlotsScreen
  const [reason, setReason] = useState('');  // State to hold the user's reason

  const confirmSlot = () => {
    if (!reason) {
      alert('Please provide a reason for booking the slot.');
      return;
    }

    // Simulate sending the request to the admin
    const bookingRequest = {
      time: selectedTime,
      room: roomName,
      reason: reason,
      status: 'pending',  // Status is initially 'pending' until admin approves
    };

    // Normally, you'd make an API call here to send the request to the server
    alert(`Slot request for ${selectedTime} has been sent for approval.\nReason: ${reason}`);

    // Simulate navigating to an admin page (you can pass data to the admin page here)
    navigation.navigate('Admin', { bookingRequest });  // Pass the booking request to the Admin page
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Confirm Your Slot</Text>
        <Text style={styles.selectedTime}>Selected Time: {selectedTime}</Text>

        {/* Reason input field */}
        <TextInput
          style={styles.input}
          placeholder="Enter reason for booking"
          value={reason}
          onChangeText={setReason}  // Update state when text changes
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.confirmButton} onPress={confirmSlot}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F9C4CC',
    },
    card: {
      width: '90%',
      backgroundColor: '#FDECE3',
      borderRadius: 15,
      padding: 20,
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      elevation: 5,
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#2F4F4F', // Dark grayish color
      textAlign: 'center',
    },
    selectedTime: {
      fontSize: 20,
      marginBottom: 30,
      color: '#444',  // A softer gray
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#FFF',
      marginBottom: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      textAlignVertical: 'top',  // Align text to the top in case of multiline
      fontSize: 16,
    },
    confirmButton: {
      backgroundColor: '#4CAF50', // Green for confirmation
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 25,
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    cancelButton: {
      backgroundColor: '#FF5733', // Red for cancel
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 25,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
  
  
  
