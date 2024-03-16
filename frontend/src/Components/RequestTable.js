import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { fontWeight } from '@mui/system';

function RequestTable() {
  const [ReqData, allReqData] = useState([]);

  const Requestdata = () => {
    axios.get("http://localhost:3005/normalroutes/allDataRequest")
      .then((res) => {
        console.log(res);
        allReqData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Requestdata();
  }, []);

  const updateSwitchData =async(id, checked) => {
    await axios.put(`http://localhost:3005/normalroutes/updateReq/${id}`, { RequestData: checked })
      .then((res) => {
        console.log("Data update success", res);

        const updatedReqData = ReqData.map(item => 
            item._id === id ? { ...item, RequestData: checked } : item
          );

          allReqData(updatedReqData);
          
      })
      .catch((error) => {
        console.log("No update toggle button data", error);
      });
  };

  return (

   <div>
    <div style={{ textAlign: 'center',marginTop:'10%'}}>
       <table class="table table-hover" style={{width:'80%',margin:'auto'}}>
       <thead>
  <tr>
    <th style={{backgroundColor: '#008DDA',fontWeight:'bolder',fontSize:'20px'}}>Name</th>
    <th style={{backgroundColor: '#008DDA',fontWeight:'bolder',fontSize:'20px'}}>Email</th>
    <th style={{backgroundColor: '#008DDA',fontWeight:'bolder',fontSize:'20px'}}>Current Role</th>
    <th style={{backgroundColor: '#008DDA',fontWeight:'bolder',fontSize:'20px'}}>Access</th>
  </tr>
</thead>


   <tbody>
            {ReqData.map((itemsAdmin) => (
              <tr key={itemsAdmin._id}>
                <td>{itemsAdmin.name}</td>
                <td>{itemsAdmin.email}</td>
                <td>{itemsAdmin.role}</td>
                <td>
               
                  <Switch
                    checked={itemsAdmin.RequestData}
                    onChange={(checked) => {
                      updateSwitchData(itemsAdmin._id, checked);
                    }}                   
                  />
               
                &nbsp; &nbsp;
                      {itemsAdmin.RequestData? "Acces given":"No Acces given"}

                </td>
              </tr>
            ))}
          </tbody>
</table>
    </div>
    </div>
  );
}

export default RequestTable;
