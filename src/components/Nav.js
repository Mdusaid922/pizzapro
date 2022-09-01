import React, { Component } from 'react'
import Slidimage from './Slidimage';


export default class Nav extends Component {
  render() {
    return (
      <div>

 {/* <nav className="navbar navbar-expand-sm fixed-top justify-content-center" style={{ backgroundColor: '' }}>
         
        </nav> */}
        <nav id="navbar-example2" className="navbar bg-light mb-3 justify-content-center shadow mb-3 fixed-top">
        <div className="container-fluid-center"  >
            <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Flogo%2F1661937247.png&w=256&q=100"
              className="navbar-brand" style={{ width: "70px" }} alt="..." />

          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">First</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">Second</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading3">third</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading4">fourth</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading5">fifth</a>
            </li>

          </ul>
        </nav>

       <div className="container-fluid-expend" style={{marginTop:"70px"}}><Slidimage/></div> 

                {/* search bar */}
        <div className='my-2 container justify-content-center'>
          <form className="d-flex" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"
              style={{ borderBottomColor: "#cc2900", borderTop: "0px", borderRight: "0px", borderLeft: "0px", borderRadius:"0" }}
            />
            <button style={{ border: "0px", color: '#cc2900' }} className="btn btn" type="submit">Search</button>
          </form>
        </div>
                {/* search bar ends */}
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" 
      className="scrollspy-example bg-light p-4 my-3 rounded-2" tabindex="0">
        <h4>First heading</h4>
          <div className="row row-cols-1 row-cols-md-5 p-2 bg-light"  id="scrollspyHeading1">
            <div className="col">         
              <div className="card" style={{ width: "250px" }}>
                <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fdish_image%2F1660805487.jpg&w=1920&q=100" 
                className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Promo Regular</h5>
                  <p className="">Rs 200</p>
                  <button type="button" class="btn btn-secondary">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col">         
              <div className="card" style={{ width: "300px" }}>
                <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fdish_image%2F1660805487.jpg&w=1920&q=100" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Promo Regular</h4>
                  <p className="">Rs 200</p>
                  <button className="btn-btn ">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="col">         
              <div className="card" style={{ width: "300px" }}>
                <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fdish_image%2F1660805487.jpg&w=1920&q=100" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Promo Regular</h4>
                  <p className="">Rs 200</p>
                  <button className="btn-btn ">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <h4 id="scrollspyHeading2">Second heading</h4>
          <div className="row row-cols-1 row-cols-md-5 g-4 m-3 bg-light" id="scrollspyHeading2">
            <div className="col">
              <div className="card" style={{ width: "300px" }}>
                <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fdish_image%2F1660805487.jpg&w=1920&q=100" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Promo Regular</h4>
                  <p className="">Rs 200</p>
                  <button className="btn-btn ">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <h4 >Third heading</h4>
          <div className="row row-cols-1 row-cols-md-5 g-4 m-3 bg-light " id="scrollspyHeading3">
            <div className="col">
              <div className="card" style={{ width: "300px" }}>
                <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fdish_image%2F1660805487.jpg&w=1920&q=100" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Promo Regular</h4>
                  <p className="">Rs 200</p>
                  <button className="btn-btn ">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <h4 id="scrollspyHeading4">Fourth heading</h4>
          <div className="row row-cols-1 row-cols-md-5 g-4 m-3 bg-light" id="scrollspyHeading4">
            <div className="col">
              <div className="card" style={{ width: "300px" }}>
                <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fdish_image%2F1660805487.jpg&w=1920&q=100" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Promo Regular</h4>
                  <p className="">Rs 200</p>
                  <button className="btn-btn ">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <h4 id="scrollspyHeading5">Fifth heading</h4>
          <div className="row row-cols-1 row-cols-md-5 g-4 m-3 bg-light" id="scrollspyHeading5">
            <div className="col">
              <div className="card" style={{ width: "300px" }}>
                <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fdish_image%2F1660805487.jpg&w=1920&q=100" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Promo Regular</h4>
                  <p className="">Rs 200</p>
                  <button className="btn-btn ">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
