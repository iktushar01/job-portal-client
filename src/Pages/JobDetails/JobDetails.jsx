import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, company} = useLoaderData();
    return (
        <div>
            <h1>{title}</h1>
            <h1>{company}</h1>
            <button className='btn btn-primary'>apply now</button>
        </div>
    );
};

export default JobDetails;