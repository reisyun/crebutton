import React from 'react';
import { color } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import HeaderContainer from '../../containers/HeaderContainer';

function Color() {
  return (
    <CustomTemplate icon={color} header={<HeaderContainer title="Color" />}>
      Color Content
    </CustomTemplate>
  );
}

export default Color;
