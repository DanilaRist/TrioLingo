import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { StatusBar, Box, HStack, IconButton, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'; // Ensure styles are correctly imported

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
        <View style={{ width: 50 }} /> {/* Placeholder to balance spacing */}
      </HStack>
    </>
  );
}

function LearningScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const objects = [
    { id: 1, name: "Juuri", image: require('./assets/beatroot.png') },
    { id: 2, name: "Pullo", image: require('./assets/bottle.png') },
    { id: 3, name: "Kaali", image: require('./assets/cabbage.png') },
    { id: 4, name: "Kana", image: require('./assets/chicken.jpg') },
    { id: 5, name: "Kala", image: require('./assets/fish.png') },
    { id: 6, name: "Liha", image: require('./assets/meat.png') },
    { id: 7, name: "Puuro", image: require('./assets/porridge.jpg') },
    { id: 8, name: "Pulla", image: require('./assets/pulla.jpg') },
  ];

  const handleNext = () => {
    if (currentIndex < objects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleReturn = () => {
    navigation.navigate('Home');
  };

  const currentObject = objects[currentIndex];

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} title="Learning" />
      <View style={styles.content}>
        <Image source={currentObject.image} style={styles.image} />
        <Text style={styles.name}>{currentObject.name}</Text>
        <View style={styles.buttonContainer}>
          {currentIndex < objects.length - 1 ? (
            <Button title="Next" onPress={handleNext} color="#003580" />
          ) : (
            <Button title="Return" onPress={handleReturn} color="#003580" />
          )}
        </View>
      </View>
    </View>
  );
}

export default LearningScreen;
