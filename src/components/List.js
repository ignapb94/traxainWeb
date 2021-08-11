import React, { Component } from 'react'


class List extends Component {



  render() {
    return (

      
<div>
<br></br><br></br>


<table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">price</th>
              <th scope="col">main</th>
              <th scope="col"></th>
              {/*<th scope="col">status</th>
              <th scope="col">verifier</th>
              <th scope="col">id</th>*/}
            </tr>
          </thead>

          <tbody id="productList">
           { this.props.Subs.map((sub, key) => {   
              return(
            
                <tr key={key}>
                  <th scope="row">{sub.idS}</th>
                  {/*<td>{sub.participant}</td>*/}
                  <td>{window.web3.utils.fromWei(sub.price, 'ether')}</td>
                  
                  <td>{parseInt(sub.mainTrip, 0) + 1}</td>
                  <td>
                    { {/*!product.purchased*/}
                       ? <button 
                          
                          onClick={(event) => {
                            this.props.search(sub.mainTrip)
                        } }>
                          Select
                        </button>
                      :null
                    }
                      </td>
                  {/*<td>{this.props.myTrip.status}</td>
                  <td>{this.props.myTrip.verifier}</td>
              <td>{this.props.thisTripID}</td>*/}
                </tr>)})}
          </tbody>
 </table>

  </div>
    )
  }
}

export default List;