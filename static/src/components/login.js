import React, {Component} from react;

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div class="container">
        <div class="col-md-6 center-block"></div>
          <form>
            <div class="form-group">
              <label for="inputEmail">Email</label>
              <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event,newValue)=>{this.setState({userEmail:newValue})}}/>
              <small id="emailHelp" class="form-text text-muted">We''ll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" onChange={(event,newValue)={this.setState({userPW:newValue})}}/>
            </div>

            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                Remember
              </label>
            </div>

            <div class="text-left">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="button" class="btn btn-primary">Register</button>
            </div>
          </form>
      </div>
    );
  }
}

export default Login;
