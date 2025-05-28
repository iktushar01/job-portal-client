import React from "react";
import { useLoaderData, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { title } = useLoaderData();
  const { user } = UseAuth();

  const handleApplyFromSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const portfolio = form.portfolio.value;
    const gitHub = form.gitHub.value;
    const skill = form.skill.value;
    const letter = form.letter.value;

    const applications = {
      jobId,
      name,
      email,
      portfolio,
      gitHub,
      skill,
      letter,
    };

    axios
      .post("http://localhost:4000/applications", applications)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your application has been submited",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-primary">
        Apply for Job : {title}
      </h1>
      <form onSubmit={handleApplyFromSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          defaultValue={user?.displayName}
          className="input input-bordered w-full"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          defaultValue={user?.email}
          className="input input-bordered w-full"
        />
        <input
          name="portfolio"
          type="url"
          placeholder="Portfolio Website URL"
          className="input input-bordered w-full"
        />
        <input
          name="gitHub"
          type="url"
          placeholder="GitHub Profile URL"
          className="input input-bordered w-full"
        />
        <textarea
          name="skill"
          placeholder="Technical Skills (e.g. React, Node.js, MongoDB)"
          className="textarea textarea-bordered w-full"
          rows="3"
        />
        <textarea
          name="letter"
          placeholder="Short Cover Letter"
          className="textarea textarea-bordered w-full"
          rows="4"
        />
        <button type="submit" className="btn btn-primary w-full">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
