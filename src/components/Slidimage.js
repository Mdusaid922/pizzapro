import React, { Component } from 'react'

export class Slidimage extends Component {
  render() {
    return (
      <div>

       



        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4 "></button>

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1655174753.jpg&w=1920&q=100"
                className="d-45ock w-100" alt="..." style={{ height: "450px" }} />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1658158956.png&w=1920&q=100"
                className="d-block w-100" alt="..." style={{ height: "450px" }} />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1655174753.jpg&w=1920&q=100"
                className="d-block w-100" alt="..." style={{ height: "450px" }} />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div>
            <div className="carousel-item">
              <img src="https://pizzamax.com.pk/api/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1655474340.jpg&w=1920&q=100"
                className="d-block w-100" alt="..." style={{ height: "450px" }} />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div>
          </div>
          <button style={{ height: "100px", width: "80px", marginTop: "200px", borderRadius: "10px", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
            className="carousel-control-prev bg-light" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button style={{ height: "100px", width: "80px", marginTop: "200px", borderRadius: "10px", borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
            className=" carousel-control-next bg-light " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" ></span>
          </button>
        </div>
      </div>
    )
  }
}

export default Slidimage
