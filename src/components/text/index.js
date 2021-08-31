import React from 'react';
import {Text} from 'react-native';
import * as colors from '../../theme/colors';

const index = ({
  color = colors.black,
  size = 14,
  bold,
  align = 'left',
  children,
  style = {},
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[
        {
          textAlign: align,
          color,
          fontWeight: bold ? 'bold' : 'normal',
          fontSize: size,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default index;
