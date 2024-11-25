import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function AdminPage() {
  const route = useRoute();
  const navigation = useNavigation();
  
  const { bookingRequest } = route.params;  // Get the booking request passed from the user side
  const [slotStatus, setSlotStatus] = useState(bookingRequest.status);  // Track the slot's status (pending, approved, rejected)

  const approveSlot = () => {
    setSlotStatus('approved');  // Update status to approved
    alert(`Slot for ${bookingRequest.time} has been approved.`);
    // Simulate updating the backend, you would normally make an API call to update the status in the database
    navigation.goBack(navigation.pop(3)); // Navigate back to the previous screen or another page
  };

  const rejectSlot = () => {
    setSlotStatus('rejected');  // Update status to rejected
    alert(`Slot for ${bookingRequest.time} has been rejected.`);
    // Simulate backend rejection logic here
    navigation.goBack(navigation.pop(3));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Slot Booking Request</Text>
        <Text style={styles.selectedTime}>Requested Time: {bookingRequest.time}</Text>
        <Text style={styles.reason}>Reason: {bookingRequest.reason}</Text>

        <Text style={styles.status}>Status: {slotStatus}</Text>

        <TouchableOpacity style={styles.approveButton} onPress={approveSlot}>
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rejectButton} onPress={rejectSlot}>
          <Text style={styles.buttonText}>Reject</Text>
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
    approveButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      rejectButton: {
        backgroundColor: '#FF5733',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
  });