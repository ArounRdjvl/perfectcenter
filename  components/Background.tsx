import React from "react"
import { makeStyles, useTheme } from "@material-ui/core"
import { heightHeader } from "./Navigation"

const useStyles = makeStyles((theme) => {
    // à paramétrer possiblement
    const pictoSize = "7%"
    const groupHeight = "100vh"
    return {
        root: {
            position: "absolute",
            width: "100%",
            top: heightHeader,
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

export function Background() {
    const classes = useStyles(useTheme())

    const [groupNumber, setGroupNumber] = React.useState<number>(0)
    const [height, setHeight] = React.useState<number>(0)

    React.useEffect(() => {
        console.log(document.documentElement.scrollHeight)
        console.log(window.innerHeight)
        const ratio = document.documentElement.scrollHeight / window.innerHeight
        setGroupNumber(Math.ceil(ratio))
    }, [])

    React.useEffect(() => {
        // seems ok to do it like that
        setHeight(document.documentElement.scrollHeight - heightHeader)
    }, [])

    const groups = []

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
