import React from 'react';
import EazyTable from 'eazytable';
import 'eazytable/dist/eazytable.css';


const tempRows = [
    { name: "Sri", age: 25, height: "5`9", id: 1 },
    { name: "Raju", age: 25, height: "5`4", id: 2 },
    { name: "Shreya", age: 25, height: "5'2", id: 3 }
]

const columns = [
    { field: 'name', label: "Name", width: 200 },
    { field: 'age', label: "Age", width: 100 },
    { field: 'height', label: "Height" }
]

const App = () => {
    return (
        <div>
            <EazyTable
                title="Users"
                columns={columns}
                data={tempRows}
                rowKeyField="id"
                pagination={true}
                fullWidth={true}
            />
        </div>
    );
};

export default App;
