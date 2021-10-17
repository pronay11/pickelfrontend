import React, { useState } from 'react';
import pic from '../images/containt.svg';
const Contact =()=>{
  const[data,setData] = useState({
     fullname:"",
     email:"",
     address:"",
     phone:"",
     message:"",
  });

  const InputEvent =(event)=>{
    const{name,value} = event.target;
    setData((preVal) =>{
        return{
          ...preVal,
          [name]:value,
        }
    });

  }
  const fromSubmit = async(e) =>{
    e.preventDefault();
    // alert(`${data.fullname}`);
    const{fullname,email,address,phone,message}=data;

    if (fullname && email && address && phone && message){
      const res = await fetch("https://form-data01-default-rtdb.firebaseio.com/form.json",
        {
          method:"POST",
          headers:{
          "Content-Type":"application/json",
          },
          body:JSON.stringify({
            fullname,email,address,phone,message,
          }),
        }
      );

      if (res) {
       setData({
         fullname:"",
         email:"",
         address:"",
         phone:"",
         message:"",
       });
       alert("Data Store Successfully");
      }

    } else{
      alert("Pleaze fill all the Data")

    }

  };
  return(
    <>
    <div className="grid-container">
     {/* <div className="contact-text">
       <h1 className="text-center">Contact Us</h1>
     </div> */}
     <div className="container">
       <div className="contact_div">
         <div className="contact">
    
          <form onsubmit={fromSubmit} method="POST" >
            <div className="contact-title">
               <h2>CONTACT US</h2>
            </div>
            <div className="contact-input">
            <p type="Name:"><input name="fullname" autoComplete="off" required value={data.fullname} onChange={InputEvent} placeholder="Write your name here.." /></p>
            <p type="Email:"><input name="email" autoComplete="off" required value={data.email} onChange={InputEvent} placeholder="Let us know how to contact you back.." /></p>
            <p type="Address:"><input name="address" autoComplete="off" required value={data.address} onChange={InputEvent} placeholder="What would you like to tell us.." /></p>
            <p type="Phone:"><input name="phone" autoComplete="off" required value={data.phone} onChange={InputEvent} placeholder="Phone.." /></p>
            <p type="Message:"><input name="message" autoComplete="off" required value={data.message} onChange={InputEvent} placeholder="Message.." /></p>
            </div>
            <div className="contact-button">
            <button type="submit" onClick={fromSubmit}>Send Message</button>
            </div>
            <div className="contact-owner">
              <span className="fa fa-phone" />001 1023 567
              <span className="fa fa-envelope-o" /> contact@company.com
            </div>
          </form>



         </div>

       </div>

      </div>
      <div className="contact-img">
        <img src={pic} className="animated" alt="No Picture"/>

      </div>

     </div>
    </>
  );
};
export default Contact;