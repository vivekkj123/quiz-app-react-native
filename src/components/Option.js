import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Questions from '../questions.json';

const Option = props => {
  let correctAnswerIdx = Questions.questions[props.qnIndex].correctIndex;
  const [Optioncolor, setOptioncolor] = useState({borderColor: 'black'});
  let handleValidation = () => {
    if (props.optionIdx === correctAnswerIdx) {
      console.log('Correct Answer');
      setOptioncolor({borderColor: 'green'});

      setTimeout(() => {
        if (props.qnIndex + 1 >= Questions.questions.length) {
          console.log('End of Quiz');
        } else {
          props.navigation.navigate('QuestionScreen', {
            index: props.qnIndex + 1,
          });
        }
        setOptioncolor({borderColor: 'black'});
      }, 750);
    } else {
      console.log('Wrong Answer');
      setOptioncolor({borderColor: 'red'});

      setTimeout(() => {
        if (props.qnIndex + 1 >= Questions.questions.length) {
          console.log('End of Quiz');
        } else {
          props.navigation.navigate('QuestionScreen', {
            index: props.qnIndex + 1,
          });
        }
        setOptioncolor({borderColor: 'black'});
      }, 1500);
    }
  };
  return (
    <View style={[styles.Option, Optioncolor]}>
      <TouchableOpacity onPress={handleValidation}>
        <Text style={styles.OptionText}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  Option: {
    borderColor: 'black',
    borderWidth: 3,
    margin: 40,
    marginBottom: 3,
    borderRadius: 25,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDECEC',
  },
  OptionText: {
    fontSize: 26,
  },
});
