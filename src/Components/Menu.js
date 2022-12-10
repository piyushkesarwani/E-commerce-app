import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus } from "react-icons/fa";
import { Category } from "./Category";
import { Button } from "react-bootstrap";
import { menuArray } from "./Data";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

export const Menu = () => {
  const allCategories = [
    "All",
    ...new Set(menuArray.map((item) => item.category)),
  ];
  console.log(allCategories);

  const [menu, setMenu] = useState(menuArray);
  const [categories, setCategories] = useState(allCategories);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const filterItems = (category) => {
    if (category === "All") {
      setMenu(menuArray);
      return;
    }
    const newMenuItems = menuArray.filter((item) => item.category === category);
    setMenu(newMenuItems);
  };

  return (
    <div className="container">
      <Navbar className="border" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">E-commerce app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>

              {/* This is dropdown */}
              {/* <NavDropdown
                title={
                  <>
                    <FaCartPlus /> {cart.length}
                  </>
                }
                id="basic-nav-dropdown"
              >
                <div>
                  {cart.map((c) => {
                    const {img, t, subt, pri} = c;
                    return (
                      <>
                        <NavDropdown.Item href="#action/3.1">{t}</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </>
                    );
                  })}
                </div>
              </NavDropdown> */}

              {/* <Button className="fs-5 d-flex justify-content-center align-items-center bg-primary"> */}
            </Nav>
            <Link to="/cart" className="text-decoration-none">
              <div className="cursor-pointer d-flex flex-row justify-content-center align-items-center bg-primary p-2 text-light">
                <FaCartPlus className="cursor-pointer fs-1 pe-2" />
                <div className="fs-5">{cart.length}</div>
              </div>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <Category categories={categories} filterItems={filterItems} />
      </div>

      {/* This will be the menu container */}
      <section className="w-100 m-5 h-auto d-flex flex-wrap justify-content-center align-items-center">
        {menu.map((item) => {
          const { image, title, subtitle, price } = item;
          return (
            <article className="singleItem border mt-3 ms-2 me-2">
              <div className="menuImageDiv">
                <img className="menuImage" src={image} alt={title} />
              </div>
              <div className="menuTextDiv p-3">
                <h2 className="font-Monospace fs-4 text-black fw-bold">
                  {title}
                </h2>
                <p className="font-Monospace fs-6 text-black fw-lighter fs-italic">
                  {subtitle}
                </p>
                <p className="font-Monospace fs-5 text-black fw-regular">
                  {price}
                </p>

                <div className="button">
                  {cart.some((p) => p.id === item.id) ? (
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                      className="bg-danger text-light p-2 fs-5 font-monospace border-0"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        })
                      }
                      className="bg-primary text-light p-2 fs-5 font-monospace border-0"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};
