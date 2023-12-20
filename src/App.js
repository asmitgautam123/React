import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

const rows = [
  { id: 1, firstName: 'asmit', lastName: 'gautam', age: 25 },
  { id: 2, firstName: 'sid', lastName: 'bhai', age: 21},
  { id: 3, firstName: 'kritika', lastName: 'kumari', age: 23},
];

const App = () => {
  const [pageSize, setPageSize] = React.useState(10);

  const handleColumnResize = (newColumnSizes) => {
    // Update column sizes as needed
    console.log('New Column Sizes:', newColumnSizes);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        columnBuffer={2} // Number of columns rendered outside the scrollable area
        onColumnResize={handleColumnResize}
      />
    </div>
  );
};

export default App;

