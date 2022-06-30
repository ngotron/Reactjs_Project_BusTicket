import React from "react";
import { useState } from "react";

function Contact() {
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
  const sendMessge = () => {
    alert("send message ");
  };

  JSON.stringify(formData);

  // e.preventDefault();

  return (
    <div
      className="p-2  mx-auto "
      style={{ width: 650, margin: 300, padding: 300 }}
    >
      <form
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
            type="name"
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
            type="date"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.DOB}
            onChange={(e) => setForm({ ...formData, DOB: e.target.value })}
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
              onClick={sendMessge}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      {/* {JSON.stringify(formData)} */}

      <h2>Name:-{formData.name}</h2>
      <h2>Email:-{formData.email}</h2>
      <h2>IDcard:-{formData.IDcard}</h2>
      <h2>DOB:-{formData.DOB}</h2>
      <h2>Phone number:-{formData.phoneNumber}</h2>
    </div>
  );
}

export default Contact;
