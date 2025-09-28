import React, { useEffect, useState } from 'react'
import axios from "axios";

function Employee() {

const[employeesList,setEmployeesList]=useState(null);
const[data,setData] = useState({name:"",address:"",salary:0});

const changeHandler = (e)=>{
setData({...data,[e.target.name]:e.target.value})
};
useEffect(()=>{
    getAll();
  },[]);

  function getAll(){
    //alert("this us")
axios.get("http://localhost:8081/employee").then((d) =>{
setEmployeesList(d.data.empData);
}).catch(()=>{
alert("Unable to access api !!!");
});
}
function updateClick(){
  axios.put("http://localhost:8081/employee",data).then((d)=>{
    alert(d.data.message);
    getAll();
    resetForm();
  }).catch((error)=>{
    alert("Unable To Accesss API",error);
    });
  
}

function DeleteEmployee(id){
  let ans = window.confirm("Want To Delete Data?");
  if(!ans) return;
  axios.delete("http://localhost:8081/employee" ,{data:{id:id}}).then((d)=>{
    alert(d.data.message);
    getAll();
  }).catch((e)=>{
    alert("Unable to access API.",e);
  });
}

// function addemp(){
//   axios.post("http://localhost:8081/employee").then((d)=>{
//     alert(d.data.message);
//     getAll();
//     resetForm();
//   }).catch((error)=>{
//     alert("Unable to Fetch Api",error);
//   })
// }



  function saveClick(){
    axios.post("http://localhost:8081/employee",data).then((d)=>{
      alert(d.data.message);
      getAll();
      resetForm();
    }).catch((e)=>{
      alert("Unable to access api");
    });
  }


  function resetForm(){
    setData({
      name:"",
      address:"",
      salary:0
    })
  }

  function renderEmployees(){
    return employeesList?.map((emp)=>{
      return(
        <tr>
          <td>{emp.name}</td>
          <td>{emp.address}</td>
          <td>{emp.salary}</td>
          <td>
          <button className ="btn btn-info" data-target = "#editEmployee" data-toggle ="modal" >Edit</button>
      <button 
  className="btn btn-danger" 
  onClick={() => DeleteEmployee(emp._id)}
>
  Delete
</button>
          </td>
        </tr>
      );
    });
  }
  return (
    <>
      <h2 class="text-success">Employees List</h2>
    <div className='row p-2 m-2'>
      <div className='col-9'>
        <h2 className="text-primary text-left"></h2>
      </div>
      <div className='col-3'>
        <button className='btn btn-info form-control' data-target="#newEmployee" data-toggle="modal">Add New Employee</button>
      </div>
    </div>

    <div className='border p-2 m-2'>
      <table className="table table-bordered table-striped table-active">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
{renderEmployees()}
</tbody>
      </table>
    </div>

    {/*New Employee */}

    <div class="modal" tabindex="-1" role="dialog" id="newEmployee">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title text-white">New Employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>
      <div class="modal-body">
       <div className='form-group row'>
        <label className='col-4'>Name</label>
        <div className="col-8">
          <input type ="text" name='name' className='form-control' value={data.name}  onChange={changeHandler}/>
        </div>
        
       </div>

        <div className='form-group row'>
        <label className='col-4'>Address</label>
        <div className="col-8">
          <input type ="text" name='address' className='form-control' value={data.address} onChange={changeHandler}/>
        </div>
       </div>

       <div className='form-group row'>
        <label className='col-4'>Salary</label>
        <div className="col-8">
          <input type ="Number" name='salary' className='form-control'  value={data.salary}  onChange={changeHandler}/>
        </div>
       </div>
       

      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" onClick={saveClick}>Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

      {/*Edit Employee */}

      <div class="modal" tabindex="-1" role="dialog" id="editEmployee">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h5 class="modal-title text-white">Edit Employee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>
      <div class="modal-body">
       <div className='form-group row'>
        <label className='col-4'>Name</label>
        <div className="col-8">
          <input type ="text" name='name' className='form-control' onChange={changeHandler}/>
        </div>
        
       </div>

        <div className='form-group row'>
        <label className='col-4'>Address</label>
        <div className="col-8">
          <input type ="text" name='address' className='form-control' onChange={changeHandler}/>
        </div>
       </div>

       <div className='form-group row'>
        <label className='col-4'>Salary</label>
        <div className="col-8">
          <input type ="text" name='name' className='form-control' onChange={changeHandler}/>
        </div>
       </div>
       

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={updateClick}>Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Employee
