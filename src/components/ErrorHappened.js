import React, { Component } from 'react'
import Web3 from 'web3'

//import App from './App'
import dai from '../dai.png'





class ErrorHappened extends Component {




    render() {
        return (


<div className="card mb-4" >

<div className="card-body">


 <table className="table table-borderless text-muted text-center">
          <thead>
            
          </thead>
          <tbody>
            <tr>
            <td>Algo ha ido mal, por favor, revisa los datos </td>
            
            <td>
            { {/*!product.purchased*/}
                       ?
              <button onClick={(event) => {this.props.errorStatus()}}>Refrescar</button>
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

 export default ErrorHappened;