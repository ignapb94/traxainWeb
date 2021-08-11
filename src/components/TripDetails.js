import React, { Component } from 'react'


class TripDetails extends Component {



  render() {
    return (

      
<div>
<br></br><br></br>


<table className="table">
          <thead>
            <tr>
            <th scope="col">CreationDay</th>
              <th scope="col">reference</th>
              <th scope="col">Buffer</th>
             
              
            </tr>

            </thead>
            <tbody id="productList">
            <tr>

                  <td>{this.props.myTrip.creationDay}</td>
                  <td>{this.props.myTrip.extRef}</td>
                  <td>{this.props.myTrip.bufferDay}</td>
            
              
            </tr>
            </tbody>

            <thead>
           
                <tr>
                 
                  <th scope="col">Payday</th>
                  <th scope="col">Status</th>
                  <th scope="col">My Role</th>
  
                </tr>
            </thead>
            <tbody id="productList">
                <tr>
                
                <td>{this.props.myTrip.payDay}</td>
                <td>{this.props.strStatus}</td>
                <td>{this.props.userRole}</td>


              </tr>



          </tbody>
 </table>

  </div>
    )
  }
}

export default TripDetails;