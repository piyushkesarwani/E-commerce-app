import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const count = [1, 2, 3, 4, 5];

  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState();

  // const handleIncrement = () => {
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  // };

  // const handleDecrement = () => {
  //   setQuantity((prevQuantity) => prevQuantity - 1);
  // };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  console.log(cart);
  // console.log(parseInt((cart[0].qty) * (cart[0].price)));

  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">E-commerce app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="cartSection d-flex flex-row justify-content-center">
        {/* This will be the left section */}
        <div className="leftCartSection">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <p className="fs-1 mt-3 fw-bold font-monospace text-dark">
              Your Cart
            </p>
            <p className="fs-4 mt-3 fw-bold font-monospace text-dark">
              {cart.length} Items
            </p>
          </div>

          <div className="underline"></div>

          {/* <div className="ms-3 me-3">
          <Row>
            <Col className="cartItemColumn"><p>Product Details</p></Col>
            <Col className="cartItemColumn"><p>Product Quantity</p></Col>
            <Col className="cartItemColumn"><p>Item Price</p></Col>
            <Col className="cartItemColumn"><p>Item Total Price</p></Col>
          </Row>
        </div> */}

          {cart.map((item) => {
            return (
              <article className="cartSingleItem border p-3 d-flex f-row justify-content-around align-items-center">
                <Row>
                  <Col md={2} className="cartItemColumn">
                    <div className="cartItemHeader d-flex flex-row justify-content-center align-items-center">
                      <img className="cartItemImage" src={item.image} />
                      <div>
                        <h2 className="fs-4 font-monospace fw-bold ms-4">
                          {item.title}
                        </h2>
                        <h4 className=" cartItemSubtitle fs-6 font-monospace fw-lighter ms-4">
                          {item.subtitle}
                        </h4>
                      </div>
                    </div>
                  </Col>

                  <Col md={2} className="cartItemColumn">
                    <div className="productQuantity d-flex flex-row justifyc-content-center align-items-center">
                      {/* <button className="Decrement" onClick={() => dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: {
                      id: item.id,
                      qty: setQuantity(prevQuantity => prevQuantity - 1),
                    },
                  })}>
                    &#8722;
                  </button>
                  <div className="bg-light text-dark font-monospace border border-grey p-2">
                    {quantity}
                  </div>
                  <button className="Increment" onClick={() => dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: {
                      id: item.id,
                      qty: quantity,
                    },
                  })}>
                    &#43;
                  </button> */}

                      {/* <form className="selectBox border" value={item.qty} onChange={(e) => dispatch({
                    type: "CHANGE_CART_QTY",
                    paylod: {
                      id: item.id,
                      qty: e.target.value,
                    }
                  })}>
                    <option>{1}</option>
                    <option>{2}</option>
                    <option>{3}</option>
                    <option>{4}</option>
                    <option>{5}</option>
                  </form> */}

                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {count.map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </Form.Control>
                    </div>
                  </Col>

                  <Col md={2} className="cartItemColumn">
                    <div className="cartItemPrice">
                      <p>Rs. {item.price}</p>
                    </div>
                  </Col>

                  <Col md={2} className="cartItemColumn">
                    <div className="cartItemTotalPrice">
                      <p>{parseInt(item.price) * parseInt(item.qty)}</p>
                    </div>
                  </Col>

                  <Col md={2} className="cartItemColumn">
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    >
                      <AiFillDelete className="fs-4" />
                    </button>
                  </Col>
                </Row>
              </article>
            );
          })}

          <Link to="/menu">Continue Shopping</Link>
        </div>

        {/* This will be the order summary div */}

        <div className="rightCartSection border bg-grey position-relative p-3">
          <div>
            <div className="d-flex flex-row justify-content-between p-1 align-items-center">
              <h2 className="fs-4 fw-bold font-Arial">Order Summary</h2>
              <button
                onClick={() =>
                  dispatch({
                    type: "CLEAR_CART",
                    dispatch: cart,
                  })
                }
                className="bg-danger text-light p-1 fs-5"
              >
                Clear Cart
              </button>
            </div>
            <div className="underline"></div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center">
            <h4>Items {cart.length}</h4>
          </div>
          <div className="underline"></div>

          <div className="position-absolute bottom-0 start-0 w-100">
            <p className="text-black fs-5 fw-bold font-monspace">
              Total Price = Rs. {total}
            </p>
            <button type="button" className="bg-primary border-0 text-light fs-4 fw-bold w-100">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
