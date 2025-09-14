import { useState } from "react"
import "./Form.css"

export const Newform = () => {
    const [user,setUser] =useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phonenumber:""
    })


    const handlechange=(event)=>{

        const {name, value} = event.target

        setUser((prev)=> ({...prev, [name]:value}))
    }
     const handlesubmit=(e)=>{
        e.preventDefault()

        console.log(user)
    }
    return (
        <>
            <section className="text_center">
                <div>
                    <p>Hello my name is<span className="terms_color"> {user.firstname} {user.lastname}</span> and my phone number is<span className="terms_color"> {user.phonenumber}</span></p>
                </div>
                <form className="form_background" onSubmit={handlesubmit}>
                    <h1 className="heading_main">Sign UP</h1>
                    <p>Please Fill in this form to create a account.</p>
                    <div className="form_flex">
                        <label>First Name</label>
                        <input className="input_name" type="text" name="firstname" placeholder="Enter your first name" value={user.firstname} onChange={handlechange}/>
                        <label>Last Name</label>
                        <input className="input_name" type="text" name="lastname" placeholder="Enter your last name" value={user.lastname} onChange={handlechange}/>
                        <label>Email</label>
                        <input className="input_name" type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handlechange} />
                        <label>Password</label>
                        <input className="input_name" type="password" name="password" placeholder="Enter your password" value={user.password} onChange={handlechange}/>
                        <label>Phone Number</label>
                        <input className="input_name" type="number" name="phonenumber" placeholder="Enter your phone number" value={user.phonenumber} onChange={handlechange}/>
                        <p>By Creating an account You agree to Our <span className="terms_color">Terms and Privacy</span></p>
                        <button type="submit" className="sign_btn">Sign Up</button>
                    </div>
                </form>
            </section>
        </>
    )
}