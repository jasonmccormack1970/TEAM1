import React from 'react';

import Employees from '../components/employees';
import Engineers from '../components/engineers';
import AddEmployee from '../components/addemployee';


export default function SpaceX() {
    return (
        <div>
            <h4 className="text-muted">SpaceX data page</h4>
            <AddEmployee/>
            <Employees />
            <Engineers />

        </div>
    );
}
