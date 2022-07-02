import React, { useState ,useRef} from "react";

import emailjs from 'emailjs-com';
import { useLocation } from "react-router-dom";

function Contact() {
    const search = useLocation().search;
    var seats = new URLSearchParams(search).get('name');
    seats = JSON.parse(seats);
    const form = useRef();

    const handlerSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_p0492fq",
                "template_hysef9q",
                form.current,
                "user_NCZiEsz50dB5kjWGfQKbX"
            )
            .then(
                (result) => {
                    alert("ban da dat cho thanh cong");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const [formData, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        IDcard: "",
        DOB: "",
    });

    // console.log(form);

    const backData = () => {
        alert("back ");
    };
  

    JSON.stringify(formData);

    // e.preventDefault();

    return (
        <div
            className="p-2  mx-auto "
            style={{ width: 650, margin: 300, padding: 300 }}
        >
            <form
                ref={form}
                onSubmit={handlerSubmit}
                className="rounded"
                style={{
                    background: "linear-gradient(to top right, #fa9e1b, #8d4fff)",
                    padding: 50,
                }}
            >
                <h3 className="text-center">CONTACT US</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Name:
                    </label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setForm({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email:
                    </label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        value={setForm.email}
                        onChange={(e) => setForm({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Phone number:
                    </label>
                    <input
                        name="phone"
                        type="phoneNumber"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone number"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                            setForm({ ...formData, phoneNumber: e.target.value })
                        }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        ID card:
                    </label>
                    <input
                        name="id-card"
                        type="IDcard"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ID card"
                        value={formData.IDcard}
                        onChange={(e) => setForm({ ...formData, IDcard: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Date of birth:
                    </label>
                    <input
                        name="dob"
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={formData.DOB}
                        onChange={(e) => setForm({ ...formData, DOB: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Ghe da chon:
                    </label>
                    <input
                        name="seats"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={ seats !== null && seats.toString() }  
                    />
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={backData}
                    >
                        Back
                    </button>

                    <div>
                        <button
                            className="btn text-white"
                            style={{ background: "#31124b" }}
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
            {/* {JSON.stringify(formData)} */}

           
        </div>
    );
}

export default Contact;
