import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ICBackArrow, ICBackArrowLight} from '../../../assets';

export default function IconOnlyButton({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBackArrow />;
    }
    if (icon === 'back-light') {
      return <ICBackArrowLight />;
    }
    return <ICBackArrow />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
