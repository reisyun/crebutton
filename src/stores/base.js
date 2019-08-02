import { observable, action } from 'mobx';

class BaseStore {
  @observable text = '';

  @observable done = false;

  @observable slideBar = false;

  @action onChangeText = e => {
    this.text = e.target.value;
  };

  @action onConvertMode = () => {
    this.done = !this.done;
  };

  @action onSlideBarControl = () => {
    this.slideBar = !this.slideBar;
  };
}

export default BaseStore;
