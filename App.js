import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);



  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text : enteredGoalText,key: Math.random().toString()},
    ]);

    setModalIsVisible(false);
  }

  function openModalHandler(){
    setModalIsVisible(true);
  }

  function closeModalHandler(){
    setModalIsVisible(false);
  }


  function deleteGoalHandler(key){
     setCourseGoals((currentCourseGoals) => {
        return currentCourseGoals.filter((goal) => goal.key != key);
     })
  }

  console.log(modalIsVisible);


  return (
    <View style={styles.appContainer}>
      { !modalIsVisible  && <Button title="Add new Goal" color ="#5e0acc" onPress={openModalHandler} /> }
      { modalIsVisible &&  <GoalInput onAddgoal = {addGoalHandler} visible={modalIsVisible} onCloseModal = {closeModalHandler}/>}  
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(ItemData) => {
            return <GoalItem  onDeleteGoal={deleteGoalHandler} item={ItemData.item}/>
          }}
        />
      </View>
    </View>
  );
}

// OLD WAY OF RENDERING A LIST OF ITEMS
//Using JavaScript inbuilt map method on an Array
// 
// <View  style={styles.goalsContainer}>
// <ScrollView>
//   {courseGoals.map((goal,index) =>
//       <View style={styles.goalItem}  key={index}>
//           <Text style={styles.goalText}>
//               {goal}
//           </Text>
//        </View>
//   )}
// </ScrollView>
// </View>

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e0858"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 5,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16,
  }
});
