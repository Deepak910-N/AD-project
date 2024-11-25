import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TimeSlotsScreen() {
  const navigation = useNavigation();

  const goToUdPage = () => {
    navigation.navigate('UnderDev');
  };

  const goToConfirmPage = (time) => {
    navigation.navigate('Verify', { selectedTime: time }); // Passing the selected time to the Verify screen
  };

  const SlotButton = ({ time, status, onPress }) => (
    <TouchableOpacity
      style={[styles.slotButton, status === 'available' ? styles.available : styles.unavailable]}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Text style={styles.slotText}>{time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* G01 Section */}
      <Text style={styles.roomName}>G01:</Text>
      <Text style={styles.subtitle}>Time Slots Available:</Text>
      <View style={styles.slotsContainer}>
        <SlotButton time="8:00 - 10:00" status="available" onPress={() => goToConfirmPage("8:00 - 10:00")} />
        <SlotButton time="10:00 - 12:00" status="available" onPress={() => goToConfirmPage("10:00 - 12:00")} />
        <SlotButton time="12:00 - 1:00" status="unavailable" />
        <SlotButton time="1:30 - 4:00" status="available" onPress={() => goToConfirmPage("1:30 - 4:00")} />
      </View>

      {/* F11 Section */}
      <Text style={styles.roomName}>F11:</Text>
      <Text style={styles.subtitle}>Time Slots Available:</Text>
      <View style={styles.slotsContainer}>
        <SlotButton time="8:00 - 10:00" status="available" onPress={() => goToConfirmPage("8:00 - 10:00")} />
        <SlotButton time="10:00 - 12:00" status="unavailable" />
        <SlotButton time="12:00 - 1:00" status="available" onPress={() => goToConfirmPage("12:00 - 1:00")} />
        <SlotButton time="1:30 - 4:00" status="available" onPress={() => goToConfirmPage("1:30 - 4:00")} />
      </View>

      {/* Legend Section */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem} accessibilityLabel="Available slot">
          <View style={[styles.legendBox, styles.available]} />
          <Text style={styles.legendText}>Available</Text>
        </View>
        <View style={styles.legendItem} accessibilityLabel="Unavailable slot">
          <View style={[styles.legendBox, styles.unavailable]} />
          <Text style={styles.legendText}>N/A</Text>
        </View>
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
  roomName: {
    marginTop:15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  slotButton: {
    width: '45%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  slotText: {
    color: '#333',
    fontWeight: 'bold',
  },
  available: {
    backgroundColor: '#D0F0C0',
  },
  unavailable: {
    backgroundColor: '#F9C4CC',
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  legendBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    color: '#333',
    fontSize: 14,
  },
});
