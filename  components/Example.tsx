import "../styles/Example.module.less"

export interface ExampleProps {
    sentence?: string
}

export function Example(props: ExampleProps) {
    return (
        <div className="hey">
            <div>this is my example component</div>
            <div>{props.sentence}</div>
        </div>
    )
}
