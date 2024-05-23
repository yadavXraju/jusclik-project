var UserProfile = (function() {
  var user_data = {};
  
    var getData = function() {
      return user_data; 
    };
  
    var setData = function(data) {
      user_data = data;
    };
  
    return {
      getData: getData,
      setData: setData
    }
  
  })();
  
  export default UserProfile;