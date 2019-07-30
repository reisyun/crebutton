import React from 'react';
import { color } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import Header from '../../components/organisms/Header';

function Color() {
  return (
    <CustomTemplate icon={color} header={<Header title="Color" />}>
      Color Content
    </CustomTemplate>
  );
}

export default Color;
