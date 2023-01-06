import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form({ handleSubmit }) {
	const [text, setText] = useState("");

	const handleChange = () => {
		handleSubmit(text);
		setText("");
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Add a todo..."
				placeholderTextColor={"white"}
				onChangeText={(val) => setText(val)}
			/>
			<View style={styles.button}>
				<Button
					title="Add"
					onPress={() => handleChange()}
					color={"royalblue"}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "royalblue",
		padding: 20,
		marginTop: 10,
	},

	text: {
		color: "white",
		fontSize: 18,
		paddingBottom: 15,
		textAlign: "center",
	},

	input: {
		color: "white",
		fontSize: 18,
		padding: 15,

		borderWidth: 1,
		borderColor: "white",
	},

	button: {
		backgroundColor: "white",
		marginTop: 10,
		padding: 5,
	},
});
