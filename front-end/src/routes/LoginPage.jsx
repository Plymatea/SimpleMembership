import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <div>Login Page</div>
      <button onClick={() => (window.location.href = 'http://localhost:5000/api/auth/discord')}>
        Login with Discord
      </button>
      <button onClick={() => (window.location.href = 'http://localhost:5000/api/auth/google')}>
        Login with Google
      </button>
      <button onClick={() => (window.location.href = 'http://localhost:5000/api/auth/facebook')}>
        Login with Facebook
      </button>
      
      {/* <script>
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '{your-app-id}',
            cookie     : true,
            xfbml      : true,
            version    : '{api-version}'
          });
            
          FB.AppEvents.logPageView();   
            
        };

        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      </script> */}



      {/* FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
}); */}


    </div>
  )
};