import { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "Buy coffee", key: "1" },
		{ text: "Create an app", key: "2" },
		{ text: "Play on the switch", key: "3" },
	]);

	const handleDelete = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};

	const handleSubmit = (text) => {
		if (text.length > 3) {
			setTodos((prevTodos) => {
				return [{ text: text, key: Math.random().toString() }, ...prevTodos];
			});

			Keyboard.dismiss();
		} else {
			Alert.alert("Todo must be over 3 chars long");
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<Form handleSubmit={handleSubmit} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} handleDelete={handleDelete} />
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	content: {
		paddingHorizontal: 10,
		flex: 1,
	},
	list: {
		marginTop: 20,
		width: "100%",
		flex: 1,
	},
});
