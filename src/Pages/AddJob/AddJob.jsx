import React from 'react';

const AddJob = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600"> Add a Job</h2>
            <form className="space-y-4 bg-base-100 p-6 rounded-lg shadow-md">
                {/* Title */}
                <div>
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Software Engineer" className="input input-bordered w-full" />
                </div>

                {/* Location */}
                <div>
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Halishohor, Chittagong" className="input input-bordered w-full" />
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
                    <input type="text" name="category" placeholder="Engineering" className="input input-bordered w-full" />
                </div>

                {/* Application Deadline */}
                <div>
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" className="input input-bordered w-full" />
                </div>

                {/* Salary Range */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text">Minimum Salary</span>
                        </label>
                        <input type="number" name="minSalary" className="input input-bordered w-full" placeholder="40000" />
                    </div>
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text">Maximum Salary</span>
                        </label>
                        <input type="number" name="maxSalary" className="input input-bordered w-full" placeholder="60000" />
                    </div>
                    <div className="w-24">
                        <label className="label">
                            <span className="label-text">Currency</span>
                        </label>
                        <input type="text" name="currency" className="input input-bordered w-full" placeholder="BDT" />
                    </div>
                </div>

                {/* Company Name */}
                <div>
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type="text" name="company" placeholder="Favorite IT" className="input input-bordered w-full" />
                </div>

                {/* HR Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input type="text" name="hr_name" className="input input-bordered w-full" placeholder="Farhan Rahman" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input type="email" name="hr_email" className="input input-bordered w-full" placeholder="hr@techsolutions.com" />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered w-full" rows="4" placeholder="Job description here..."></textarea>
                </div>

                {/* Requirements */}
                <div>
                    <label className="label">
                        <span className="label-text">Requirements (comma separated)</span>
                    </label>
                    <input type="text" name="requirements" className="input input-bordered w-full" placeholder="JavaScript, React, Node.js, MongoDB" />
                </div>

                {/* Responsibilities */}
                <div>
                    <label className="label">
                        <span className="label-text">Responsibilities (comma separated)</span>
                    </label>
                    <input type="text" name="responsibilities" className="input input-bordered w-full" placeholder="Develop software, Code reviews" />
                </div>

                {/* Company Logo */}
                <div>
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="url" name="company_logo" className="input input-bordered w-full" placeholder="https://example.com/logo.png" />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
