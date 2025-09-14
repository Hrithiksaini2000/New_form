import { useState } from "react"
import "./Form.css"

// First Method which is a long method 

// export const Form = () => {
//     const [firstname, setFirstname] = useState("")
//     const [lastname, setLastname] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [phonenumber, setPhonenumber] = useState("")

//     const handlechange=(e)=>{
//         const {name, value} = e.target

//         switch(name){
//             case "First_name":
//                 setFirstname(value)
//                 break;
//             case "last_name":
//                 setLastname(value)
//                 break;  
//             case "email":
//                 setEmail(value)
//                 break;
//             case "password":
//                 setPassword(value)
//                 break;
//             case "Phone_number":
//                 setPhonenumber(value)
//                 break;
//         }
//     }

//     const handlesubmit=(event)=>{
//         event.preventDefault()

//         const Formdata={
//             firstname, lastname, email, password, phonenumber
//         }

//         console.log(Formdata)
//     }
//     return (
//         <>
//             <section className="text_center">
//                  <div>
//                     <p>Hello my name is <span className="terms_color">{firstname} {lastname}</span> and my phone number is <span className="terms_color">{phonenumber}</span></p>
//                 </div>
//                 <div className="form_background">
//                     <h1 className="heading_main">Sign UP </h1>
//                     <p>Please Fill in this form to create a account.</p>
//                     <div>
//                         <form className="form_flex" onSubmit={handlesubmit}>
//                             <label>First Name</label>
//                             <input type="text" className="input_name" name="First_name" placeholder="Enter Your First Name" value={firstname} onChange={handlechange}/>
//                             <label>Last Name</label>
//                             <input type="text" className="input_name" name="last_name" placeholder="Enter Your Last Name" value={lastname} onChange={handlechange}/>
//                             <label>Email</label>
//                             <input type="email" className="input_name" name="email" placeholder="Enter Your Email" value={email} onChange={handlechange}/>
//                             <label>Password</label>
//                             <input type="password" className="input_name" name="password" placeholder="Enter Your Password" value={password} onChange={handlechange}/>
//                             <label>Phone Number</label>
//                             <input type="number" className="input_name" name="Phone_number" placeholder="Enter Your Number" value={phonenumber} onChange={handlechange}/>
//                             <p>By Creating an account You agree to Our <span className="terms_color">Terms and Privacy</span></p>
//                             <button type="submit" className="sign_btn">Sign Up</button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }


// Second method which is short method

export const Form = () => {
    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phonenumber:"",

    })

    const handlechange=(e)=>{
        const {name, value} = e.target

        setUser((prev)=> ({...prev, [name] : value}))
    }

    const handlesubmit=(event)=>{
        event.preventDefault()

        console.log(user)
    }
    return (
        <>
            <section className="text_center">
                 <div>
                    <p>Hello my name is <span className="terms_color">{user.firstname} {user.lastname}</span> and my phone number is <span className="terms_color">{user.phonenumber}</span></p>
                </div>
                <div className="form_background">
                    <h1 className="heading_main">Sign UP </h1>
                    <p>Please Fill in this form to create a account.</p>
                    <div>
                        <form className="form_flex" onSubmit={handlesubmit}>
                            <label>First Name</label>
                            <input type="text" className="input_name" name="firstname" placeholder="Enter Your First Name" value={user.firstname} onChange={handlechange}/>
                            <label>Last Name</label>
                            <input type="text" className="input_name" name="lastname" placeholder="Enter Your Last Name" value={user.lastname} onChange={handlechange}/>
                            <label>Email</label>
                            <input type="email" className="input_name" name="email" placeholder="Enter Your Email" value={user.email} onChange={handlechange}/>
                            <label>Password</label>
                            <input type="password" className="input_name" name="password" placeholder="Enter Your Password" value={user.password} onChange={handlechange}/>
                            <label>Phone Number</label>
                            <input type="number" className="input_name" name="phonenumber" placeholder="Enter Your Number" value={user.phonenumber} onChange={handlechange}/>
                            <p>By Creating an account You agree to Our <span className="terms_color">Terms and Privacy</span></p>
                            <button type="submit" className="sign_btn">Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}