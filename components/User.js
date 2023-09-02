import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = ({ user }) => {
  return (
    <View style={styles.userContainer}>
      <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userName: {
    fontSize: 18,
  },
});

export default User;
