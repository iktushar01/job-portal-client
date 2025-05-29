import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
const AddJob = () => {
  const { user } = useContext(AuthContext);

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = {
      min,
      max,
      currency,
    };
    const requirementsString = newJob.requirements;
    const requirementDirty = requirementsString.split(",");
    const requirementsClean = requirementDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;
   

    newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
    console.log(newJob);
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        {" "}
        Add a Job
      </h2>
      <form
        onSubmit={handleAddAJob}
        className="space-y-4 bg-base-100 p-6 rounded-lg shadow-md"
      >
        {/* Title */}
        <div>
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Software Engineer"
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div>
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Halishohor, Chittagong"
            className="input input-bordered w-full"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select name="jobType" className="select select-bordered w-full">
            <option>On-site</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select name="category" className="select select-bordered w-full">
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="HR">Human Resources</option>
            <option value="Sales">Sales</option>
            <option value="IT">Information Technology</option>
            <option value="Support">Customer Support</option>
            <option value="Product">Product Management</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Legal">Legal</option>
            <option value="Construction">Construction</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Transportation">Transportation</option>
            <option value="Logistics">Logistics</option>
            <option value="Media">Media & Journalism</option>
            <option value="Government">Government</option>
            <option value="Nonprofit">Nonprofit</option>
            <option value="Retail">Retail</option>
            <option value="Food">Food & Hospitality</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Energy">Energy & Utilities</option>
            <option value="Security">Security Services</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
          />
        </div>

        {/* Salary Range */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="label">
              <span className="label-text">Minimum Salary</span>
            </label>
            <input
              type="number"
              name="min"
              className="input input-bordered w-full"
              placeholder="40000"
            />
          </div>
          <div className="flex-1">
            <label className="label">
              <span className="label-text">Maximum Salary</span>
            </label>
            <input
              type="number"
              name="max"
              className="input input-bordered w-full"
              placeholder="60000"
            />
          </div>
          <div className="md:w-24 w-full">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select name="currency" className="select select-bordered w-full">
              <option value="bdt">BDT</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
              <option value="gbp">GBP</option>
              <option value="cad">CAD</option>
              <option value="aud">AUD</option>
              <option value="jpy">JPY</option>
              <option value="cny">CNY</option>
              <option value="sar">SAR</option>
              <option value="aed">AED</option>
              <option value="myr">MYR</option>
              <option value="npr">NPR</option>
              <option value="pkr">PKR</option>
              <option value="thb">THB</option>
              <option value="krw">KRW</option>
            </select>
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Favorite IT"
            className="input input-bordered w-full"
          />
        </div>

        {/* HR Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              className="input input-bordered w-full"
              placeholder="Farhan Rahman"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
              placeholder="hr@techsolutions.com"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Job description here..."
          ></textarea>
        </div>

        {/* Requirements */}
        <div>
          <label className="label">
            <span className="label-text">Requirements (comma separated)</span>
          </label>
          <input
            type="text"
            name="requirements"
            className="input input-bordered w-full"
            placeholder="JavaScript, React, Node.js, MongoDB"
          />
        </div>

        {/* Responsibilities */}
        <div>
          <label className="label">
            <span className="label-text">
              Responsibilities (comma separated)
            </span>
          </label>
          <input
            type="text"
            name="responsibilities"
            className="input input-bordered w-full"
            placeholder="Develop software, Code reviews"
          />
        </div>

        {/* Company Logo */}
        <div>
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            className="input input-bordered w-full"
            placeholder="https://example.com/logo.png"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
