import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import { socket } from "../config/web-sockets";

function Login(props) {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [error, setError] = useState("");


    const handleOnClick = () => {
        console.log('name', username, room);
        if (username && room) {
            socket.emit("join", { username, room }, (error) => {
                if (error) {
                    console.info("err", error);
                    setError(error);
                    console.error("error", error);
                }

                socket.on("welcome", (data) => {
                    console.log('data', data);
                    joinData(data);
                    props.navigation.navigate('Chat', { user: joinData.userData.username, room: joinData.userData.zoom, joinData: joinData })
                });
            });
        }
    };
    const handleOnChange = (text, setter) => {
        const value = text;
        console.log(value);
        setter(value);
    };
    return (
        <View>

            <TextInput
                style={styles.input}
                onChangeText={text => handleOnChange(text, setUsername)}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => handleOnChange(text, setRoom)}
            />

            <TouchableOpacity
                onPress={handleOnClick} >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
export default Login;