import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import Fallback from '../component/Fallback';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoScreen = () => {
    // Init local states
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    React.useEffect(() => {
        getTodosFromUserDevice();
    }, []);
    React.useEffect(() => {
        saveTodoTouserDevice(todoList);
    }, [todoList]);

    // Handle Add Todo
    const handleAddTodo = () => {
        if (todo === "") {
            Alert.alert('Please add your task')
            return;
        }

        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
        setTodo("");
    };

    // Handle Delete
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);

        setTodoList(updatedTodoList);
    };

    // Handle Edit todo
    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.title);
    };

    // Handle Update
    const handleUpdateTodo = () => {
        const updatedTodos = todoList.map((item) => {
            if (item.id === editedTodo.id) {
                return { ...item, title: todo };
            }
            return item;
        });
        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo("");
    };

    // Use AsyncStorage to save to do in local store
    const saveTodoTouserDevice = async todoList => {
        try {
            const stringifyTodos = JSON.stringify(todoList);
            await AsyncStorage.setItem('todoList', stringifyTodos);
        } catch (e) {
            console.log('Error');
        }
    };

    const getTodosFromUserDevice = async () => {
        try {
            const todoList = await AsyncStorage.getItem('todoList');
            if (todoList != null) {
                setTodoList(JSON.parse(todoList));
            }
        } catch (e) {
            console.log('error');
        }
    };

    // Render todo
    const renderTodos = ({ item, index }) => {
        return (
            <View style={styles.todoContainer}>
                <Text style={styles.todoTitle}>
                    {item.title}
                </Text>

                <FontAwesome5
                    name="pencil-alt"
                    style={styles.todoIcon}
                    onPress={() => handleEditTodo(item)}
                />
                <FontAwesome5
                    name="trash-alt"
                    style={[styles.todoIcon, { marginLeft: 10 }]}
                    onPress={() => handleDeleteTodo(item.id)}
                />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Add a task"
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />

            {editedTodo ? (
                <TouchableOpacity style={styles.button} onPress={() => handleUpdateTodo()} >
                    <Text style={styles.buttonText}>
                        Save
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} onPress={() => handleAddTodo()}
                >
                    <Text style={styles.buttonText}>
                        Add
                    </Text>
                </TouchableOpacity>
            )}

            {/* Render todo list */}

            <FlatList data={todoList} renderItem={renderTodos} />

            {todoList.length <= 0 && <Fallback />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 40,
    },
    textInput: {
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 12,
        marginVertical: 34,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    },
    todoContainer: {
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 8,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    todoTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        flex: 1
    },
    todoIcon: {
        fontSize: 22,
        color: '#fff',
    }
});

export default TodoScreen;