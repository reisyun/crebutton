import React from 'react';
import { transform } from '../../static/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';
import HeaderContainer from '../../containers/HeaderContainer';

function Transform() {
  return (
    <CustomTemplate
      icon={transform}
      header={<HeaderContainer title="Transform" />}>
      Transform Content
    </CustomTemplate>
  );
}

export default Transform;
