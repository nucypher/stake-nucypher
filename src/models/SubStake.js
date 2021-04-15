import { decorate } from 'mobx';

class SubStake {
  constructor(obj) {
    this.index = obj.index;
    this.firstPeriod = obj.firstPeriod;
    this.lastPeriod = obj.lastPeriod;
    this.value = obj.value;
    this.remainingDuration = obj.remainingDuration;
    this.unlockableNextPeriod = obj.unlockableNextPeriod
  }
}

export default decorate(SubStake, {
});
