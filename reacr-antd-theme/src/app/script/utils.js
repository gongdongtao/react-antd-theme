var Utils = {

	getDeviceType: function(type) {
    let label = 'Other';
    switch (type) {
      case 0:
        label = 'Router'
        break;
      case 1:
        label = 'Android';
        break;
      case 2:
        label = 'iOS';
        break;
      case 3:
        label = 'PC';
        break;
      case 4:
        label = 'MAC';
        break;
      case 5:
        label = 'Vrouter';
        break;
      case 6:
        label = 'Linux';
        break;
      case 7:
        label = 'Other';
        break;
      default:
        break;
    }
    return label;
  }
}

export default Utils;