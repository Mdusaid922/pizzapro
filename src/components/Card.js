import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className='container bg-light'>
                <h3>propmo</h3>
                <div className="row row-cols-1 row-cols-md-5 g-4 m-3 bg-light">
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
        )
    }
}

export default Card
