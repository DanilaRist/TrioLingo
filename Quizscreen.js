import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar, Box, HStack, IconButton, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'; // Import styles from styles.js

function AppBar({ navigation, title }) {
  return (
    <>
      <StatusBar bg="#003580" barStyle="light-content" />
      <Box safeAreaTop bg="#003580" />
      <HStack
        bg="#003580"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <IconButton
          icon={<Icon as={MaterialIcons} name="home" color="#FFFFFF" />}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.appBarTitle}>{title}</Text>
        <View style={{ width: 50 }} /> {/* Placeholder for spacing */}
      </HStack>
    </>
  );
}

function QuizScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const objects = [
    { id: 1, name: "Beetroot", image: require('./assets/beatroot.png'), translations: ["Juuri", "Juusto", "Jukra", "Juna"], correct: "Juuri" },
    { id: 2, name: "Bottle", image: require('./assets/bottle.png'), translations: ["Pulla", "Pullo", "Puuro", "Pyörä"], correct: "Pullo" },
    { id: 3, name: "Cabbage", image: require('./assets/cabbage.png'), translations: ["Kana", "Kala", "Kaali", "Kantaa"], correct:"Kaali"},
    { id: 4, name: "Chicken", image: require('./assets/chicken.jpg'), translations: ["Kana", "Kala", "Kaali", "Kantaa"], correct: "Kana" },
    { id: 5, name: "Fish", image: require('./assets/fish.png'), translations: ["Kana", "Kala", "Kaali", "Kantaa"], correct: "Kala" },
    { id: 6, name: "Meat", image: require('./assets/meat.png'), translations: ["Liha", "Lohi", "Limu", "Lähi"], correct: "Liha" },
    { id: 7, name: "Porridge", image: require('./assets/porridge.jpg'), translations: ["Pulla", "Pullo", "Puuro", "Pyörä"], correct: "Puuro" },
    { id: 8, name: "Bun", image: require('./assets/pulla.jpg'), translations: ["Pulla", "Pullo", "Puuro", "Pyörä"], correct: "Pulla"},
    // Add more objects with correct translations
  ];

  const handleSubmit = async () => {
    if (selectedAnswer === objects[currentIndex].correct) {
      setScore(score + 1);
    }

    if (currentIndex < objects.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer("");  // Reset the picker selection
    } else {
      // Save the result and navigate to the Results screen
      await AsyncStorage.setItem('quizResult', JSON.stringify({ correct: score + (selectedAnswer === objects[currentIndex].correct ? 1 : 0), total: objects.length }));
      navigation.navigate('Results');
    }
  };

  const currentObject = objects[currentIndex];

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} title="Quiz" />
      <View style={styles.content}>
        <Image source={currentObject.image} style={styles.image} />
        <Text style={styles.name}>{currentObject.name}</Text>
        <Picker
          selectedValue={selectedAnswer}
          onValueChange={(itemValue) => setSelectedAnswer(itemValue)}
          style={styles.picker}
        >
          {currentObject.translations.map((translation, index) => (
            <Picker.Item label={translation} value={translation} key={index} />
          ))}
        </Picker>
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} color="#003580" />
        </View>
      </View>
    </View>
  );
}

export default QuizScreen;
