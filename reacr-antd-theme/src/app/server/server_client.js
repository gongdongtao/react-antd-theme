import $ from 'jquery';

class serverClient {
  
  constructor() {
    this.serviceUrl = Window.AppConfig.serviceUrl;
  }
  
  login(param, callback, errorCallback) {
    $.ajax({
      type: "POST",
      url: `${this.serviceUrl}/login`,
      // contentType: 'application/json',
      dataType: "json",
      data: param, // JSON.stringify(param),
      success: function(result){
        if (result && result.code === 200) {
          callback(result.data);
        } else {
          errorCallback({errorCode: 1});
        }
      },
      error: function(result){
        errorCallback({errorCode: 1});
      }
    });
  }
  
}

const ServerClient = new serverClient();
export default ServerClient;