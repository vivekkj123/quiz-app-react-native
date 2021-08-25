/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Option from '../components/Option';
import Questions from '../questions.json';

export default function quizScreen({route, navigation}) {
  const {index} = route.params;
  return (
    <View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.questionNo}>
          {index + 1}/{Questions.questions.length}
        </Text>
        <Text style={styles.timer}>
          10s <Icon name="clock-o" size={25} color="black" />
        </Text>
      </View>
      <Text style={styles.Question}>{Questions.questions[index].question}</Text>
      {Questions.questions[index].answers.map((option, i) => (
        <Option
          value={option}
          navigation={navigation}
          optionIdx={i}
          qnIndex={index}
          key={i}
        />
      ))}
      {/* <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
        }}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  questionNo: {
    color: 'red',
    fontSize: 25,
    margin: 20,
  },
  timer: {
    color: '#FFB802',
    fontWeight: '900',
    fontSize: 25,
    margin: 20,
    alignItems: 'flex-end',
  },
  Question: {
    fontSize: 30,
    margin: 25,
  },
  nextButton: {
    height: 50,
    width: '20%',
    backgroundColor: '#3700B3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 20,
    borderRadius: 15,
  },
  nextText: {
    color: 'white',
    fontWeight: '900',
  },
});
