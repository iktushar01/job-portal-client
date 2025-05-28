import React from 'react';
import ApplicationState from './applicationState';
import ApplicationList from './ApplicationList';

const Myapplications = () => {
    return (
        <div>
            <ApplicationState></ApplicationState>
            <ApplicationList></ApplicationList>
        </div>
    );
};

export default Myapplications;