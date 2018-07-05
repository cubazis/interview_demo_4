import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './Login.css';
class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
	
	
/*	login() {
        if(this.state.username && this.state.password){
            PostData('/login',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }
            });
        }
    }*/
	
	login() {
		if(this.state.username && this.state.password){
			PostData('/index.php',this.state).then((result) => {
				let responseJson = result;
				console.log(responseJson);
				if(responseJson.userData){
					sessionStorage.setItem('userData',JSON.stringify(responseJson));
					this.setState({redirectToReferrer: true});
				}
			});
		}
	}


    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {


        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
            return (<Redirect to={'/home'}/>)
        }


        return (
            <div id="body">
                <div >
                    <h4>Login</h4>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.onChange}/>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.onChange}/>
                    <input type="submit" value="login" onClick={this.login}/>
                </div>
            </div>
        );
    }
}
export default Login;