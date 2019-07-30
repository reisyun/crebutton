import React from 'react';
import { shape } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import Header from '../../components/organisms/Header';

function Shape() {
  return (
    <CustomTemplate icon={shape} header={<Header title="Shape" />}>
      Shape Content
    </CustomTemplate>
  );
}

export default Shape;
