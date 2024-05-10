import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  block_wrapper: {
    borderBottomWidth: 0.5,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    color: '#000',
    fontSize: 20,
  },
  block_value: {
    maxWidth: '70%',
    fontWeight: '500',
    color: '#000',
    fontSize: 18,
  },
});
