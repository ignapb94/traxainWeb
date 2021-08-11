import React, { Component } from 'react'
import Web3 from 'web3'

//import App from './App'
import dai from '../dai.png'





class Actions extends Component {




    render() {
        return (

  <div id= "content" className="mt-3">




<div className="card mb-4" >

<div className="card-body">
<form className="mb-3" onSubmit={(event) => {
  event.preventDefault()
  let _tripSearched = this._tripSearched.value 
 



    {this.props.searchManual(_tripSearched)};
 


}}>



<div className="input-group mb-4">
  <input
    
    ref={(_tripSearched) => { this._tripSearched = _tripSearched }}
    className="form-control form-control-lg"
    placeholder="Nº de Viaje"
    required />
 
</div>

<button type="submit" className="btn btn-primary btn-block btn-lg">Buscar Viaje</button>
</form>
</div>
</div>





  <div className="card mb-4" >
  
  <div className="card-body">
 <form className="mb-3" onSubmit={(event) => {
   event.preventDefault()
  
   this.props.usersTripCount()

 }}>
 

   
 
 <button type="submit" className="btn btn-primary btn-block btn-lg">Ver mis viajes</button>

 </form>
 </div>

 </div>
 



<div className="card mb-4" >             
<div id= "content" className="mt-4">
<div className="card-body">
 <form className="mb-3" onSubmit={(event) => {
   event.preventDefault()
  
   this.props.showCreationFields()

 }}>
 <div>
   
  
 </div>

   
 
 <button type="submit" className="btn btn-primary btn-block btn-lg">Quiero Crear</button>

 </form>
 </div>

 </div>

 <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col">Tu balance de tokens de Traxain</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{window.web3.utils.fromWei(this.props.traxainTokenBalance, 'ether')} TXN </td>
            
            <td>
            { {/*!product.purchased*/}
                       ?
              <button onClick={(event) => {this.props.refreshPage()}}>Refrescar</button>
              :null
                    }
              </td>
            
            </tr>
          </tbody>
        </table>






 </div>
 </div>
        )
      }
 }

 export default Actions;