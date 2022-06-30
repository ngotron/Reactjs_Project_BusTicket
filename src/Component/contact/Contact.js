import React, { useState ,useRef} from "react";
import emailjs from 'emailjs-com';
function Contact() {
    const form = useRef();

    const initialValue = {
        name: "",
        email:"",
        phone:0,
        dob: "",
        id: ""
    }
    const [user,setUser] = useState(initialValue);
    
    const handlerChange = (e) =>{
         const name = e.target.name 
        //const value = e.target.value 
        
        const value = e.target.type === 'radio' ? e.target.checked : e.target.value;
        setUser({...user,[name]:value})
    }
    const handlerSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_p0492fq', 'template_hysef9q', form.current, 'user_NCZiEsz50dB5kjWGfQKbX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      };
    
    return (
        <div
        className="p-2  mx-auto "
        style={{ width: 650, margin: 300, padding: 300 }}
        >
        <form ref={form} onSubmit={handlerSubmit}
            className="rounded"
            style={{
            background: "linear-gradient(to top right, #fa9e1b, #8d4fff)",
            padding: 50,
            }}
        >
            <h3 className="text-center">CONTACT US</h3>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Name:
            </label>
            <input
                value={user.name}
                name="name"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={handlerChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Email:
            </label>
            <input
                value={user.email}
                type="email"
                name=""
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={handlerChange}
            />
            </div>
            <div className="mb-3">
           
      
            </div>
            <div className="mb-3">
            <label htmlFor="phone" className="form-label">
                Phone number:
            </label>
            <input
                name="phone"
                value={user.phone}
                onChange={handlerChange}
                className="form-control"
                id="phone"
                aria-describedby="emailHelp"
                placeholder="Phone number"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="id-card" className="form-label">
                ID card:
            </label>
            <input
                name="id"
                className="form-control"
                id="id-card"
                onChange={handlerChange}
                value={user.id}
                placeholder="ID card"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="date" className="form-label">
                Date of birth:
            </label>
            <input
                onChange={handlerChange}
                type="date"
                className="form-control"
                id="date"
                name="dob"
                value={user.dob}
            
            />
            </div>
            <div className="modal-footer">
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Back
            </button>
            <button
                type="submit"
                className="btn text-white"
                style={{ background: "#31124b" }}
            >
                Send Message
            </button>
            </div>
        </form>
        {user.email}    
        </div>
  );
}
export default Contact;
