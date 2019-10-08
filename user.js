import { React, Component } from 'react'

class UserForm extends Component {
    constructor(){
        super()
        this.state = { 
            enable_save: true,
            user_type: '',
            email: ''        
        }
    }

    handleUserType = (e) => {
        this.setState({
            user_type: e.target.value
        })
    }
    
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        },
        () => {
            this.checkEmail()
        })
    }

    checkEmail = () => {
        if(this.state.user_type === "Admin"){
            if(this.state.email.slice(-9) === "@fool.com"){
                this.setState({ enable_save: true})
            } else {
            this.setState({ enable_save: false})
            }
        }
    }

    render() {
        const { enable_save } = this.state
        return(
            <form>
                <fieldset>
                    <label htmlFor='user_name'>Username:</label>
                        <input type='text' name='user_name' required/>
                    
                    <label htmlFor='first_name'>First Name:</label>
                        <input type='text' name='first_name' required/>
                    
                    <label htmlFor='last_name'>Last Name:</label>
                        <input type='text' name='last_name' required/>
                    
                    <label htmlFor='user_type'>User Type:</label>
                        <input type='radio' name='user_type' value='Standard' onChange={this.handleUserType} required />Standard
                        <input type='radio' name='user_type' value='Admin' onChange={this.handleUserType}/>Admin
                    
                    <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' onChange={this.handleEmail} required/>
                    <div role='alert'>
                        {!enable_save && <p className='red'>Invalid Admin Email</p>}
                    </div>     
                    <button type='submit' disabled={!enable_save}>Save</button>
                </fieldset>
            </form>
        )
    }
}

export default UserForm