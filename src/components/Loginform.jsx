import { useState } from "react"
import "../components/Form.css"

export const Loginform=()=>{

    const [user, Setuser] =useState({
        username:"",
        password:""
    })

    const onhandlesubmit=(e)=>{
        e.preventDefault()
        console.log(user)
    }

    const onhandlechange=(event)=>{
        const {name,value}= event.target
        Setuser((prev)=> ({...prev, [name]:value}))
    }
    return(
        <>
              <section className="text_center">
                <form className="form_background" onSubmit={onhandlesubmit}>
                    <h1 className="heading_main">LOGIN FORM</h1>
                    <div className="form_flex">
                        <label>Username</label>
                        <input className="input_name" type="text" name="username" placeholder="Enter your user name" onChange={onhandlechange} value={user.name}/>
                        <label>Password</label>
                        <input className="input_name" type="password" name="password" placeholder="Enter your password" onChange={onhandlechange} value={user.password} />
                        <button type="submit" className="sign_btn">Login</button>
                    </div>
                </form>
            </section>
        </>
    )
}