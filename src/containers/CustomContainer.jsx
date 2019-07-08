import React from 'react';
import Custom from '../components/custom/Custom';
import Header from '../components/custom/Header';
import ContentList from '../components/custom/ContentList';

function CustomContainer() {
  return (
    <Custom>
      <Header />
      <ContentList />
    </Custom>
  );
}

export default CustomContainer;
