import React from 'react';
import CustomTemplate from '../../components/templates/CustomTemplate';
import HeaderContainer from '../../containers/HeaderContainer';
import Content from '../../components/organisms/Content';

function Main() {
  return (
    <CustomTemplate header={<HeaderContainer title="custom" />}>
      <Content />
    </CustomTemplate>
  );
}

export default Main;
