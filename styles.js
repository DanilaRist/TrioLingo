import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background
  },
  text: {
    color: '#003580', // Deep blue text
    fontSize: 20,
    margin: 10,
  },
  button: {
    backgroundColor: '#003580', // Deep blue button
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#FFFFFF', // White text on the button
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: 150,
    color: '#003580', // Deep blue text in picker
  },
  appBarTitle: {
    color: '#FFFFFF', // White text for AppBar title
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Align text to the center
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Space below the AppBar
  },
  image: {
    width: 200, // Increased image width
    height: 200, // Increased image height
    marginBottom: 20,
    borderColor: '#003580', // Deep blue border color
    borderWidth: 4, // Thickness of the border (brackets)
    borderRadius: 10, // Slight rounding for the edges
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '60%',
    marginTop: 20,
  },
});

export default styles;
