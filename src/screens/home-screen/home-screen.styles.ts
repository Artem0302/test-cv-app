import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  gender_wrapper: {
    flexDirection: 'row',
  },
  reset_btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#CD5C5C',
    borderRadius: 8,
    margin: 8,
    alignSelf: 'flex-end',
  },
  reset_btn_text: {
    color: '#CD5C5C',
    fontWeight: '500',
    fontSize: 22,
  },
});
