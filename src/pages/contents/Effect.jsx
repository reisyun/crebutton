import React from 'react';
import { effect } from '../../static/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import HeaderContainer from '../../containers/HeaderContainer';

function Effect() {
  return (
    <CustomTemplate icon={effect} header={<HeaderContainer title="Effect" />}>
      Effect Content
    </CustomTemplate>
  );
}

export default Effect;
