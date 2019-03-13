

export default class oaksApi {

  constructor(nativeV3Module){

    self.v3Module = nativeV3Module;

  }
  startScan = () => {
    console.log('===> npm package startScan called');
    self.v3Module.startScan();
  }
}

