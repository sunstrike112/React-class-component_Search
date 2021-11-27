import React, { Component } from 'react';
import './SignIn.css'

class SignIn extends Component {
    constructor(pros){
        super(pros)
        this.state = {
            userName: '',         
            passWord: '',
            isLogIn: false
        }
    }

    validateInputs = () => {
        const{userName, passWord} = this.state
        if ((userName !== '') && (passWord !== '')){
            if ((userName === 'admin') && passWord === 'admin'){
                return true
            } else {
                return false
            }
        }
        return false
    }
    
    handleLogIn = () => {
        if (this.validateInputs() === true) {
            if (this.state.isLogIn === false) {
                this.setState ({
                    isLogIn: true
                })
                this.props.loginCallback()
            }   
        } else {
            this.setState ({
                isLogIn: false
            })
        }
    }

    render() {
        return (
            <div className='signin'>  
                <div>
                    <div>
                        <label>Username</label>
                        <input onChange={(inputUsername) => this.setState({userName: inputUsername.target.value})}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input onChange={(inputPassword) => this.setState({passWord: inputPassword.target.value})}/>
                    </div>
                    <div>
                        <button onClick={this.handleLogIn}>Log In</button>
                        {
                            this.state.isLogIn ?
                                <div></div>
                            :
                                <div className="warning">Please enter correct username and password</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn;
