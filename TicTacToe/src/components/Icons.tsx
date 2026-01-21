import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  name: string;
};

export const Icons = ({ name }: Props) => {
  switch (name) {
    case 'cross':
      return <Icon name="times" size={38} color="#38CC77" />;

    case 'circle':
      return <Icon name="circle-o" size={38} color="#F7CD2E" />;

    default:
      return <Icon name="square-o" size={38} color="#444" />;
  }
};
