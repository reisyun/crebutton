import React from 'react';
import { connect } from 'react-redux';
import Result from '../../components/result/Result';

function ResultContainer({ done }) {
  return <Result done={done} />;
}

const mapStateToProps = ({ preview }) => ({
  done: preview.done,
});

export default connect(mapStateToProps)(ResultContainer);
