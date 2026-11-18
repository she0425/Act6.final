import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    gap: 12,
  },
  text: {
    fontSize: 18,
    color: '#000000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10,
  }
});