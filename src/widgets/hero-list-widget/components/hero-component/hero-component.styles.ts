import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    borderColor: '#D3D3D3',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  like_btn: {
    marginRight: 8,
  },
  name_text: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
  },
  arrow_right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
