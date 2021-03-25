import styles from "../styles/Example.module.css"

export interface ExampleProps {
    sentence : string
}

export function Example(props : ExampleProps) {
    return (
        <div className={styles.hey}>
            <div>this is my example component</div>
            <div>{props.sentence}</div>
        </div>
    )
}