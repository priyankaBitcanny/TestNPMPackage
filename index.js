
export default class oaksApi {

  constructor(nativeV3Module){

    this.v3Module = nativeV3Module;

  }
  startScan = () => {
    console.log('===> npm package startScan called');
    return this.v3Module.startScan();
  }

  setLockTime = (V3LockDeviceId, adminPs, currentTime, timezoneRawOffset) => {
    console.log('===> npm package setLockTime called');
    return this.v3Module.setLockTime(V3LockDeviceId, adminPs, currentTime, timezoneRawOffset);
  }

  getLockTime = (V3LockDeviceId, adminPs, timezoneRawOffset) => {
    console.log('===> npm package getLockTime called');
    return this.v3Module.getLockTime(V3LockDeviceId, adminPs, timezoneRawOffset);
  }

  lock = (lockKey, V3LockDeviceId, currentTime, timezoneRawOffset) => {
    console.log('===> npm package lock called');
    return this.v3Module.lock(lockKey, V3LockDeviceId, currentTime, timezoneRawOffset);
  }

  unlock = (lockKey, V3LockDeviceId, currentTime, timezoneRawOffset) => {
    console.log('===> npm package unlock called');
    return this.v3Module.unlock(lockKey, V3LockDeviceId, currentTime, timezoneRawOffset);
  }

}

