import createContext from '../lib/utils/createContext';
import Base from './base';

export default createContext({
  base: new Base(),
});
