import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; // Import styles from styles.js

function ResultsScreen({ navigation }) {
  const [result, setResult] = useState({ correct: 0, total: 0 });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const resultString = await AsyncStorage.getItem('quizResult');
        if (resultString) {
          const resultData = JSON.parse(resultString);
          setResult(resultData);
          const percentage = (resultData.correct / resultData.total) * 100;
          if (percentage >= 70) {
            setMessage('Well done!');
          } else {
            setMessage('Would you like to try again?');
          }
        }
      } catch (error) {
        console.error('Error fetching result from AsyncStorage:', error);
      }
    };

    fetchResult();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Score: {result.correct} / {result.total}</Text>
      <Text style={styles.name}>{message}</Text>
      <View style={styles.buttonContainer}>
        {message === 'Would you like to try again?' && (
          <Button title="Try Again" onPress={() => navigation.navigate('Quiz')} color="#003580" />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} color="#003580" />
      </View>
    </View>
  );
}

export default ResultsScreen;
