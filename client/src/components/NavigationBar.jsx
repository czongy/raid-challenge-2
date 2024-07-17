import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavigationBar.css";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function NavigationBar({handleShow}) {
  const { cartCounter } = useContext(CartContext);
  const { isLoggedIn, isOwner, handleLogin, handleLogout, handleOwner} = useContext(UserContext);

  function handleBoth(e) {
    handleLogin(e);
    handleOwner(e);
  }

  return (
    <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="light">
      <Container fluid className="px-4">
        <Navbar.Brand href="/" className="hover-primary">Fruit Store</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link onClick={handleShow}>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart3 hover-primary"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span className="ms-1">({cartCounter})</span>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="collapse-custom">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Nav.Link href="#logout" onClick={handleLogout} className="hover-primary">
                Logout
              </Nav.Link>
            ) : (
              <Nav>
                <Nav.Link onClick={handleLogin} className="hover-primary">Login-Customer</Nav.Link>
                <Nav.Link onClick={handleBoth} className="hover-primary">Login-Owner</Nav.Link>
              </Nav>
            )}
            { isLoggedIn ?
              isOwner 
              ? <Nav.Link href="/orderpage" className="hover-primary">Order List</Nav.Link> 
              : <Nav.Link href="/orderhistory" className="hover-primary">Order History</Nav.Link>
              : null
            }
            {/* <Nav.Link href="/orderhistory" className="hover-primary">
              {isLoggedIn ? "Order History" : null}
            </Nav.Link>
            <Nav.Link href="/orderlist" className="hover-primary">
              {isLoggedIn && isOwner ? "Order List" : null}
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
