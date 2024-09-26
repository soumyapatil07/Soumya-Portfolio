import "./nav.css";
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navcomponent() {
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();
  const handleMenuItemClick = (name) => {
    setExpanded(false);
    navigate(`/${name}`);
  };
  return (
    <div className="header" id="arabicNav">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{
          background: "rgba(51,51,51,255)",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Brand
              style={{ fontWeight: "bold", cursor: "pointer" }}
              className="custom-navbar"
              onClick={() => handleMenuItemClick("arabic")}
            >
              الصفحة الرئيسية
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className=" bg-light"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("arabic/about")}
              >
                المعلومات
              </Nav.Link>
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("arabic/contact")}
              >
                الاتصال
              </Nav.Link>
              <NavDropdown title="مشاريع" id="basic-nav-dropdown">
                <NavDropdown title="مشروع موقعي الشخصي">
                  <NavDropdown.Item
                    href="https://www.diouani-mokhtar.de/"
                    target="_blank"
                  >
                    مشروع-مباشر
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://github.com/Diouani1/my-portofolio"
                    target="_blank"
                  >
                    GitHub
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="مشروع السيرة الذاتية">
                  <NavDropdown.Item
                    href="https://diouani1.github.io/react-group-project/"
                    target="_blank"
                  >
                    مشروع-مباشر
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://github.com/Diouani1/react-group-project"
                    target="_blank"
                  >
                    GitHub
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="مشروع حلاق">
                  <NavDropdown.Item
                    href="https://barbershop-diouani.onrender.com"
                    target="_blank"
                  >
                    مشروع-مباشر
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://github.com/Diouani1/Friseur-Project"
                    target="_blank"
                  >
                    GitHub
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("german")}
              >
                <span className="fi fi-de"></span>
              </Nav.Link>
              <Nav.Link
                className="custom-navbar"
                onClick={() => handleMenuItemClick("english")}
              >
                <span className="fi fi-gb"></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navcomponent;
