import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Questions from '../questions.json';
import {useStateValue} from '../stateProvider';

const Option = props => {
  const [{score}, dispatch] = useStateValue();
  const updateScore = Score => {
    dispatch({
      type: 'UPDATE_SCORE',
      score: Score,
    });
  };
  console.log(score);
  let correctAnswerIdx = Questions.questions[props.qnIndex].correctIndex;
  // let handleValidation = () => {
  //   if (props.optionIdx === correctAnswerIdx) {
  //     console.log('Correct Answer');
  //     setOptioncolor({borderColor: 'green'});
  //   } else {
  //     console.log('Wrong Answer');
  //     setOptioncolor({borderColor: 'red'});
  //   }
  // };
  return (
    <View style={[styles.Option, BorderColor]}>
      <TouchableOpacity
        onPress={() => {
          if (props.optionIdx === correctAnswerIdx) {
            console.log('Correct Answer');

            updateScore(1);
            // setOptioncolor({borderColor: 'green'});
          } else {
            console.log('Wrong Answer');
            updateScore(0);

            // setOptioncolor({borderColor: 'red'});
          }
        }}>
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
