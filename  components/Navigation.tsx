import Link from "next/link"
import { Nav } from "rsuite"

export function Navigation() {
    return (
        <Nav>
            <Nav.Item
                renderItem={(item) => {
                    return <Link href="/">{item}</Link>
                }}
            >
                Home
            </Nav.Item>

            <Nav.Item
                renderItem={(item) => {
                    return <Link href="/about">{item}</Link>
                }}
            >
                About
            </Nav.Item>
        </Nav>
    )
}
