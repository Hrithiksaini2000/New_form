import { useState } from "react"
import "../components/Form.css"

export const Contactform=()=>{

    const [user, Setuser] = useState({
        username:"",
        email:"",
        message:""
    })

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(user)
    }

    const handlechange=(event)=>{
        const {name,value} = event.target

        Setuser((prev)=> ({...prev, [name]:value}))
    }
    return(
        <>
             <section className="text_center">
                <form className="form_background" onSubmit={handlesubmit}>
                    <h1 className="heading_main">Contact Form</h1>
                    <div className="form_flex">
                        <label>Username</label>
                        <input className="input_name" type="text" name="username" placeholder="Enter your username" value={user.username} onChange={handlechange}/>
                        <label>Password</label>
                        <input className="input_name" type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handlechange}/>
                        <label>Message</label>
                        <textarea className="input_name" type="text" name="message" value={user.message} onChange={handlechange}/>
                        <button type="submit" className="sign_btn">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}