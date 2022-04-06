import React from "react"
import { makeStyles, useTheme } from "@material-ui/core"
import { heightHeader } from "./Navigation"

interface BackgroundProps {
    elRef : any
}

const useStyles = makeStyles((theme) => {
    // à paramétrer possiblement
    const pictoSize = "7%"
    const groupHeight = "100vh"
    return {
        root: {
            position: "absolute",
            left: 0,
            top: heightHeader,
            width: "100%",
            overflow: "hidden"
        },
        leftSnap: {
            position: "absolute",
            left: 0,
            width: pictoSize
        },
        rightSnap: {
            position: "absolute",
            right: 0,
            top: "50vh",
            width: pictoSize
        },
        group: {
            position: "relative",
            width: "100%",
            height: groupHeight
        }
    }
})

export function Background(props: BackgroundProps) {
    const classes = useStyles(useTheme())

    const [groupNumber, setGroupNumber] = React.useState<number>(0)
    const [height, setHeight] = React.useState<number>(0)


    React.useEffect(() => {
        // seems ok to do it like that
        if (props.elRef?.current) {
            const ratio = props.elRef.current.scrollHeight / window.innerHeight
            setGroupNumber(Math.ceil(ratio))
            setHeight(props.elRef.current.scrollHeight - heightHeader)
        }
    }, [props.elRef])

    const groups: JSX.Element[] = []

    for (let i = 0; i < groupNumber; i++) {
        groups.push(
            <div key={i} className={classes.group}>
                <img
                    src="picto/background_left.png"
                    className={classes.leftSnap}
                />
                <img
                    src="picto/background_right.png"
                    className={classes.rightSnap}
                />
            </div>
        )
    }

    return (
        <div className={classes.root} style={{ height }}>
            {groups}
        </div>
    )
}
