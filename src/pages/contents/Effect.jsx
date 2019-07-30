import React from 'react';
import { effect } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import Header from '../../components/organisms/Header';

function Effect() {
  return (
    <CustomTemplate icon={effect} header={<Header title="Effect" />}>
      Effect Content
    </CustomTemplate>
  );
}

export default Effect;
