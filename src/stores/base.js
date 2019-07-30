import { observable, action } from 'mobx';

class Base {
  @observable text = '';
  @observable done = false;
  @observable slideBar = false;

  @action onChangeText = e => {
    const { value } = e.target;
    this.text = value;
  };
  @action onConvertMode = () => {
    this.done = this.done ? false : true;
  };
  @action onSlideBarControl = () => {
    this.slideBar = this.slideBar ? false : true;
  };
}

export default Base;
