import React,{useState} from 'react';
import "./Contact.css";

const Contact=()=>{
    const [data,setData]=useState({
        fullname:"",
        contact:"",
        email:"",
        msg:"",


    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    };

    const formSubmit=(e)=>{
        e.preventDefault()
        alert(`Thankyou ${data.fullname}`);

    }
    return(
        <>
           <div className="my-5">
               <h1 className="font-weight-bold text-center" >Contact Us</h1>
           </div>
           <div className="container contact_div">
           <div className="row">
           <div className="col-md-6 col-10 mx-auto">
           <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}

    placeholder="Enter your email"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}

    placeholder="Enter your name"/>
  </div>


  <div class="form-group">
    <label for="exampleFormControlInput1">Contact Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" 
    name="contact"
    value={data.contact}
    onChange={InputEvent}
    placeholder="Enter your contact"/>
  </div>



  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" 
    name="msg"
    value={data.msg}
    onChange={InputEvent}
    rows="3"
    placeholder="Enter your message"></textarea>
  </div>


  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>



</form>

           </div>

           </div>

           </div>
        </>

    )

}
export default Contact; 