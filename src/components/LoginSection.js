import React from 'react';
import './LoginSection.css';
import {Button} from './Button';

function login(props) {
    return (
         <div>
             <div className="contayner">
                < div className = "login-titles" >
                    <Button className = 'btns'
                       buttonStyle = 'btn--primary'
                       buttonSize = 'btn--large'
                       onClick = '/Courses' >
                       Register as a New Employee
                   </Button>  
                    <Button
                      className = 'btns'
                      buttonStyle = 'btn--primary'
                      buttonSize = 'btn--large'
                      onClick = '/Courses' >
                      Register as a New Student 
                  </Button> </div >
            <div id="signin">
	          <div className="form-title">Login</div>
	             <div className="input-field">
		             <input type="email" id="email" />
		                <i className="material-icons">email</i>
		                <label for="email">Email</label>
	             </div>
	         <div className="input-field">
		         <input type="password" id="password"/>
	            	<i className="material-icons">lock</i>
		          <label for="password">Password</label>
	        </div>
            <div className="input-field">
		         <select select name = "login_type"
		         id = "login_type"
		         className = "input-select" >
                    <option value="null">Select Login type</option>
                    <option value="employee">Employee </option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                 </select>
	        </div>
	           <button className="login">Login</button>
	         
     </div>
        
       </div>
        </div>
    );
}


export default login;