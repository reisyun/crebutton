import React from 'react';
import { shape } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import HeaderContainer from '../../containers/HeaderContainer';

function Shape() {
  return (
    <CustomTemplate icon={shape} header={<HeaderContainer title="Shape" />}>
      Shape Content
    </CustomTemplate>
  );
}

export default Shape;
