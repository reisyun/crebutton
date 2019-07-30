import React from 'react';
import { transform } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import Header from '../../components/organisms/Header';

function Transform() {
  return (
    <CustomTemplate icon={transform} header={<Header title="Transform" />}>
      Transform Content
    </CustomTemplate>
  );
}

export default Transform;
