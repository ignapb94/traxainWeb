import React, { Component } from 'react'
import logo from '../logo.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-1 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} width="80" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Traxain Dapp
        </a>
        <div>

<ul className="navbar-nav px-3">
  <li l style={{textAlign:"right"}} class="text-center">
    <small style={{textAlign:"right",fontSize:28,color:"FFFAFA"}} className="text-secondary">
        {this.props.time}
      </small>
    </li>
  </ul>
</div>

        
<div>

        <ul className="navbar-nav px-3">
          <li class="text-center">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
          <li class="text-center">
            <form className="d-inline-block"  onSubmit={(event) => {
                    event.preventDefault()
                    
                  
                    {this.props.viewBackOffice()}
                  }}>
                  <div>
                  
                  
                  </div>
                  <div class="text-center">
                    

                  <button type="submit" className="btn btn-primary btn-block align-center text-center" >Acceder como admin</button>
                  </div>
            </form>
            </li>
            
        </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
