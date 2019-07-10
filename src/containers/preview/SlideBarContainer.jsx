import React from 'react';
import { connect } from 'react-redux';
import SlideBar from '../../components/preview/SlideBar';

function SlideBarContainer({ slideBar }) {
  return <SlideBar slideBar={slideBar} />;
}

const mapStateToProps = ({ custom }) => ({
  slideBar: custom.slideBar,
});

export default connect(mapStateToProps)(SlideBarContainer);
