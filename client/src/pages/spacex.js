import React from 'react';

import Employees from '../components/employees';

export default function SpaceX() {
    return (
        <div>
            <h4 className="text-muted">SpaceX data page</h4>
            <Employees />
        </div>
    );
}