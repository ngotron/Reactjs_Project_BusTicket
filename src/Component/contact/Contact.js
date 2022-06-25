import React from "react";

function Contact() {
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
            type="button"
            className="btn text-white"
            style={{ background: "#31124b" }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
