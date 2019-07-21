import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default (inputTemplate = locals => {
  return (
    <View style={style.viewContainer}>
      <Input
        placeholder={locals.config.placeholder}
        password={locals.config.password}
        secureTextEntry={locals.config.secureTextEntry}
        rightIcon={
          <Icon
            name={locals.config.iconName}
            type={locals.config.iconType}
            size={24}
            color='#b3b3b3'
           />
        }
        leftIconContainerStyle={style.iconContainer}
        onChangeText={v => locals.onChange(v)}/>
    </View>
  );
});

const style = StyleSheet.create({
  viewContainer: {
    marginTop: 12,
    marginBottom: 12
  },
});
