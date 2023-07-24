import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ICBackArrow} from '../../../assets';

export default function IconOnlyButton({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBackArrow />;
    }
    if (icon === 'back-light') {
      return <ICBackArrow />;
    }
    return <ICBackArrow />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
