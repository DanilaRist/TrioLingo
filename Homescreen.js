import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles'; // Import your styles

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('./assets/flag.png')} // Replace with your image path
          
        />
      </View>
      <Text style={styles.text}>Welcome to TrioLingo!</Text>
      <TouchableOpacity 
        style={[styles.button, styles.buttonBackground]} 
        onPress={() => navigation.navigate('Learning')}
      >
        <Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.buttonBackground]} 
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Take a Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
