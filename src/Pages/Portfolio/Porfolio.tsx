import React from 'react';

import RecentProjects from './RecentProjects'

interface Props { }



const Porfolio: React.FC<Props> = () => {


    return (
        <>
            <h2>Portfolio</h2>
            <RecentProjects />
        </>
    );
};

export default Porfolio;