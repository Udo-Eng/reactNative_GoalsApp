import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  const { text, key } = props.item;

  function deleteGoalHandler() {
    props.onDeleteGoal(key);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: "#dddddd" }} onPress={deleteGoalHandler}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});

export default GoalItem;
