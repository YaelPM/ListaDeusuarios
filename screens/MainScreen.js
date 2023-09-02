import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

const MainScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                const dataUsers = data.data;
                setUsersData(dataUsers);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Listado de usuarios" />
            </Appbar.Header>
            <FlatList
                data={usersData}
                keyExtractor={user => user.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UserDetails', { user: item })} // Navega a la pantalla de detalles con los datos del usuario
                    >
                        <View style={styles.userContainer}>
                            <Text style={styles.userName}>{item.first_name} {item.last_name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Añadido para un mejor espaciado
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default withNavigation(MainScreen);
