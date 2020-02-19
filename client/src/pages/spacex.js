import React from 'react';
import Employees from '../components/employees';
import Engineers from '../components/engineers';
import Actions from '../components/actions';
import AddEmployee from '../components/addemployee';

export default function spacex() {
    return (
        <div>
            <h4 className="text-muted text-center">SpaceX</h4>
            <AddEmployee />
            <Employees />
            <Engineers />
            <Actions />
        </div>
    );
}
