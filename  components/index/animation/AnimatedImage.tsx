import { makeStyles, useTheme } from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";
import { useSpring, animated, config } from "react-spring";

export interface AnimatedImageProps {
    url: string;
    position?: { x: any; y: any };
    width: any;
    rotation?: number;
    mirror?: boolean;
    delay?: number;
    center?: boolean;
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "absolute",
        },
    };
});

export function AnimatedImage(props: AnimatedImageProps) {
    const classes = useStyles(useTheme());

    const rotation = props.rotation ? props.rotation : 0

    const mirror = props.mirror ? "scaleY(-1)" : ""
    const delay = props.delay ? props.delay : 3000
    const x = props.position?.x ? props.position.x : 0 
    const y = props.position?.y ? props.position.y : 0 
    

    const [springProps, setSpring] = useSpring(() => ({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        delay: delay,
        config: {
            tension: 113,
            friction: 103,
        },
    }));

    if(props.center){

        return (
            <animated.div
                className={classes.root}
                style={{
                    left: 0,
                    right: 0, 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    top : "71vh",
                    opacity: springProps.opacity,
                    width: props.width,
                    transform: `rotate(${rotation}deg) ${mirror}`
                }}
                >
                <img src={props.url} draggable="false" referrerPolicy="no-referrer" unselectable="on" style={{ width: "100%" }} />
            </animated.div>
        );
    }
    else
    {
        return (
            <animated.div
                className={classes.root}
                style={{
                    left: x,
                    top: y,
                    opacity: springProps.opacity,
                    width: props.width,
                    height: props.width,
                    transform: `rotate(${rotation}deg) ${mirror}`,
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${props.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "80%",
                }}
            >
            </animated.div>
        );
    }
}
