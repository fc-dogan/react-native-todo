import React from "react";
import { Authenticator, SignIn } from 'aws-amplify-react-native';

class MyCustomSignUp extends React.Component {
  constructor() {
    super();
    this.gotoSignIn = this.gotoSignIn.bind(this);
  }

  gotoSignIn() {
    // to switch the authState to 'signIn'
    this.props.onStateChange('signIn',{});
  }

  render() {
    return (
      <div>
        {/* only render this component when the authState is 'signUp' */}
        { this.props.authState === 'signUp' && 
        <div>
          My Custom SignUp Component
          <button onClick={this.gotoSignIn}>Goto SignIn</button>
        </div>
        }
      </div>
    );
  }
}