import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal ,Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Declaring handler functions for the various inputs
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    // The simplest validation added to the add functionality
    let inputValue = enteredGoalText.trim();

    if (inputValue === "") return;

    props.onAddgoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      visible={props.visible}
    >
      <View style={styles.inputContainer}>
      <Image  style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goals" onPress={addGoalHandler} color="#5e0acc"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#f3128c" onPress={props.onCloseModal}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b"
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image:{
      width: 100,
      height: 100,
      marginBottom: 8
  },
  button: {
    width: "35%",
    marginHorizontal: 8,
  },
  modalContainer: {
    flex: 1,
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "80%",
    padding: 5,
    borderRadius: 6,
    paddingLeft: 8,
  },
});

export default GoalInput;
