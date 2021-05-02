import Link from "next/link"
import { Dropdown, Nav, Navbar } from "rsuite"

export function Navigation() {
    return (
        <>
            <div style={{ position : "absolute", width : "100%" }}>
                <img
                    src=".\Logo.png"
                    height="100"
                    style={{ display: "block", margin: "auto" }}
                />
            </div>
            <Navbar appearance="subtle">
                <Navbar.Body>
                    <Nav>
                        <Nav.Item>Accueil</Nav.Item>
                        <Dropdown title="A propos">
                            <Dropdown.Item>Company</Dropdown.Item>
                            <Dropdown.Item>Team</Dropdown.Item>
                            <Dropdown.Item>Contact</Dropdown.Item>
                        </Dropdown>
                        <Nav.Item>Articles</Nav.Item>
                        <Nav.Item>Nous contacter</Nav.Item>
                    </Nav>

                    <Nav pullRight>
                        <Nav.Item>PerfectCorporate</Nav.Item>
                        <Nav.Item>PerfectCare</Nav.Item>
                        <Nav.Item>PerfectCircle</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </>
    )
}
