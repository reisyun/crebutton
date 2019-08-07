import React from 'react';
import CustomTemplate from '../../components/templates/CustomTemplate';
import HeaderContainer from '../../containers/HeaderContainer';
import ContentContainer from '../../containers/ContentContainer';

function Main() {
  return (
    <CustomTemplate header={<HeaderContainer title="custom" />}>
      <ContentContainer />
    </CustomTemplate>
  );
}

export default Main;
