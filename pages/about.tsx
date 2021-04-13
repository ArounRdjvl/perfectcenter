import { Navigation } from "../ components/Navigation"
import { Example } from "../ components/Example"
import { Icon } from 'rsuite';


export default function Home() {
    return (
        <div>
            <Navigation />
            <div>
                <Icon icon="linkedin-square" size="3x" />
                <Icon icon="youtube-square" size="3x" />
                <Icon icon="facebook-square" size="3x" />
            </div>
            <Example />
            <Example />
        </div>
    )
}
