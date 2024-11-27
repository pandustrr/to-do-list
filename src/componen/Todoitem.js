import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const TodoItem = React.memo(({ todo, onUpdateStatus }) => {
    return (
        <View style={styles.item}>
        <Text style={styles.title}>{todo.time}</Text>
        <Text style={styles.title}>{todo.description}</Text>
        <Text style={styles.title}>{todo.status}</Text>
        <Button
            title={todo.status === "Doing" ? "Mark as Done" : "Mark as Doing"}
            onPress={onUpdateStatus}
        />
        </View>
    );
});

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginVertical: 9,
        borderRadius: 9,
        backgroundColor: "#f2f2f2",
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.1,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default TodoItem;
