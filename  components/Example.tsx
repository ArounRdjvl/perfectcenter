import { makeStyles, useTheme } from "@material-ui/core"

export interface ExampleProps {
    sentence?: string
}

const useStyles = makeStyles(theme => ({
    test: {
        backgroundColor: "red"
    }
}))

export function Example(props: ExampleProps) {
    const classes = useStyles(useTheme())
    return (
        <div className={classes.test}>
            <div>this is my example component</div>
            <div>{props.sentence}</div>
        </div>
    )
}
