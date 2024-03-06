import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const inputScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,

  },
  input: {
    backgroundColor: DefaultTheme.colors.surface,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.primary,
    width: '100%',
    marginBottom: 10,
    fontSize: 12, // Set font size for input fields
    fontWeight: '100', // Set font weight to normal for input fields
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});

