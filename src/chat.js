import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Chat(props) {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     if (Object.keys(joinData).length) {
    //         setMessages([joinData]);

    //         socket.on("message", (message, error) => {
    //             setMessages((prevMessages) => [...prevMessages, message]);
    //         });

    //         socket.on("roomInfo", ({ users }) => {
    //             setUsers(users);
    //         });
    //     } else {
    //         navigation.goBack()
    //     }
    // }, [joinData]);


    const handleOnMessageType = (text) => {
        setMessage(text);
    };

    const handleOnMessageSend = (event) => {
        if (message) {
            sendMessage(message);
        }
    };



    const sendMessage = (message) => {
        socket.emit(
            "sendMessage",
            { userId: joinData.userData.id, message },
            (error) => {
                if (error) {
                    console.error(error);

                    navigation.goBack()
                }
            }
        );

        setMessage("");
    };

    return (
        <View>
            <Text>{textchat}</Text>
            <TextInput style={styles.input} onChange={handleOnMessageType}></TextInput>
            <TouchableOpacity onPress={handleOnMessageSend}><Text>chat</Text></TouchableOpacity>
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
export default Chat;