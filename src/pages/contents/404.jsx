import React from 'react';
import { sad } from '../../assets/svg';
import CustomTemplate from '../../components/templates/CustomTemplate';

function NotFound() {
  return <CustomTemplate title="not found" icon={sad} />;
}

export default NotFound;
