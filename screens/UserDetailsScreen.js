import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserDetailsScreen = ({ navigation }) => {
  const user = navigation.getParam('user', {});

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.userName}>{user.first_name} {user.last_name}</Text>
      <Text style={styles.userEmail}>Correo electrónico: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UserDetailsScreen;
