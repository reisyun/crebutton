import React from 'react';
import { connect } from 'react-redux';
import Custom from '../components/custom/Custom';

function CustomContainer() {
  return <Custom />;
}

export default connect()(CustomContainer);
