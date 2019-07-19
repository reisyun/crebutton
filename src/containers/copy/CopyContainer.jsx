import React from 'react';
import { connect } from 'react-redux';
import Copy from '../../components/copy/Copy';

function ResultContainer({ done }) {
  return <Copy done={done} />;
}

const mapStateToProps = ({ base }) => ({
  done: base.done,
});

export default connect(mapStateToProps)(ResultContainer);
