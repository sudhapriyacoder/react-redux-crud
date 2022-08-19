import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from "material-table";
import { addUser, updateUser, deleteUser } from '../redux/index';


function Users() {
  const dispatch = useDispatch();
  const testUsers = useSelector(Userdata => Userdata.user);
  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },

  ]);
  const [data, setData] = useState([{ name: 'ABC', surname: 'yyyy' },
  { name: 'DEF', surname: 'zzzz' }]);

  return (
    <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            let a = newData;
            dispatch(addUser(newData))
            setData([...data, newData]);
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            dispatch(updateUser(dataUpdate))
            setData([...dataUpdate]);
            resolve();
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              dispatch(deleteUser(dataDelete))
              setData([...dataDelete]);
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}

export default Users;


