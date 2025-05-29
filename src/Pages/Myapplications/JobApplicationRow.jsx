import React from 'react';

const JobApplicationRow = ({ application, index }) => {
  const { name, email, portfolio, gitHub, skill, letter,photoURL } = application;

  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
             <img
                src={photoURL}
                alt={name}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <a href={portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Portfolio
        </a>
        <br />
        <a href={gitHub} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
      </td>
      <td>
        <span className="badge badge-info badge-sm">{skill}</span>
      </td>
      <td>
        <p className="line-clamp-2 max-w-xs">{letter}</p>
      </td>
      <th>
        <button className="btn btn-error btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default JobApplicationRow;
