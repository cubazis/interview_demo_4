import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './Signup.css';
class Signup extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    signup() {
        if(this.state.username && this.state.password){
            PostData('signup',this.state).then((result) => {
                let responseJson = result;
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
            <div className="row" id="Body">
                <div className="medium-5 columns left">
                    <h4>Signup</h4>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.onChange}/>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.onChange}/>
                    <input type="submit" value="Signup" onClick={this.signup}/>
                </div>
            </div>
        );
    }
}
export default Signup;