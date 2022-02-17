import React, { useState } from 'react'
import './index.css';
import Nav from './nav';
import Footer from './footer'; 
//import from './img' ;
import{useForm} from 'react-hook-form';

const Signup = () => {
  const{register,handleSubmit,formState: { errors }}=useForm();
  // const onSubmit = (data) => alert(JSON.stringify(data));

  //  const[datainfo, Setdatainfo]=useState();
 const onSubmit=(data)=>
  {
    console.log(data);
    //alert("submitted");
    console.log(errors);
    alert(errors);

  }
  return (
    <>
   <Nav/>
        <section className='divider'>
    <div className="container">
  <div className="row">
    <div className="col">
      <div className='mt-5'>
          <img src='./img/test.png' width="400" height="500" alt='image ha'/>
      </div>
    </div>
    <div className="col">

 <section className='signup mt-5 p-5 mb-5'>
     <h1 className='text-center mb-4'>Register Yourself </h1>

       <div className='mt-3'>

    <form className='col-xl-12 col-12' onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
    <input type="text" name='firstname' placeholder='Full Name'
     className="form-control"
    id="exampleInputEmail1" aria-describedby="emailHelp"
    {...register("firstname",{required:"name required",maxLength:{value:20,message:"write valid name"}})}/>
    <span className="text-danger">{errors.firstname && errors.firstname.message}</span>
    </div>


    <div className="col-auto mb-3">
    <input type="email" name='email' placeholder='Enter your email address' id="inputPassword6"
    className="form-control" {...register('email',{required:"enter your mail",
    check:{pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message :"invalid emailid"
  }})}
    aria-describedby="passwordHelpInline"/>
    <span className="text-danger">{errors.email && errors.email.message}</span></div>
    <div className="input-group mb-3">
  <select className='btn btn-light p-1 text-start' {...register("gender",{required:"required"})}>
    <option className="dropdown-item disabled" value="" selected>Country-code</option>
    <option value="HR">+91</option>
    <option value="CU">+231</option>
    <option value="CU">+211</option>
    <option value="HR">+233</option>
    <option value="HR">+91</option>
    <option value="CU">+231</option>
    <option value="CU">+211</option>
    <option value="HR">+233</option>
    
  </select>


  <input type="text" placeholder='Enter you number' className="form-control"
   aria-label="Text input with dropdown button"
    {...register('phone',{required:"phone no required"
    ,minLength:{value:10,message:"please enter correct number"},maxLenght:{value:10}})}/>
    <br/>
    <span className="text-danger">{errors.phone && errors.phone.message}</span>

</div> 
<div className='mb-3'>
  <select className='btn btn-light p-1 text-start' {...register("gender",{required:"required"})}>
    <option className="dropdown-item disabled" value="" selected>Gender</option>
    <option value="HR">Male</option>
    <option value="CU">Female</option>
    <option value="CU">Others</option>
  </select>
  <span className="text-danger">{errors.gender && errors.gender.message}</span>
 

</div> 
{/* <div className="btn-group mb-3">
  <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Select Your Gender
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><button className="dropdown-item" type="button">Male</button></li>
    <li><button className="dropdown-item" type="button">Female</button></li>
    <li><button className="dropdown-item" type="button">Others</button></li>
  </ul>
</div>*/}
    <div className="mb-3">
    <input type="text" placeholder='Enter your city' 
    {...register('city',{required:"Enter your city"})}  className="form-control" id="exampleInputPassword1"/>
      <span className="text-danger">{errors.city && errors.city.message}</span>

    </div>
    {/* <div className="btn-group mb-3"> */}
  {/* <button type="button" className="btn btn-light dropdown-toggle"
  {...register('country',{required:"please select your country"})}
   data-bs-toggle="dropdown" aria-expanded="false">
    Select Your Country
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><option className="dropdown-item" type="button" value="India">India</option></li>
    <li><option className="dropdown-item" type="option">Indonesia</option></li>
    <li><option className="dropdown-item" type="option">Germany</option></li>
  </ul>
  <span className="text-danger">{errors.country && errors.country.message}</span>

</div> */}
<div className='mb-3'>
  <select className='btn btn-light p-1 text-start'{...register("cc",{required:"required"})}>
    <option className="dropdown-item disabled">choose country</option>
    <option value="HR">Croatia (Hrvatska)</option>
    <option value="CU">Cuba</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="TP">East Timor</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="FX">France, Metropolitan</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    </select> 
    <span className="text-danger">{errors.cc&& errors.cc.message}</span>


</div>

    
<div className="mb-3">
    <input type="password" placeholder='Create your password'
      {...register('pass',{required:"please enter password",
      minLength:{value:6,message:"password should be of minimum 6 lenght"},
      maxLength:{value:15,message:"password should not exceed more than 15 words"},
    patt:{value:/[A-Za-z]{3}/,message:"password should be strong"}})}
      className="form-control" id="exampleInputPassword1"/>
        <span className="text-danger">{errors.pass && errors.pass.message}</span>

    </div>

    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" {...register("tick",{required:"pleasr check this"})} id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1"
     >Check all your details</label>
     <span className="text-danger">{errors.tick && errors.tick.message}</span>

    </div> 
    <button type="submit"  className="text-center btn btn-danger">Register</button>

      </form>
   </div>
    </section> 
      
    </div>
  </div>
  </div>

  

    </section>
    < Footer/>
    </>
  )
}

export default Signup













