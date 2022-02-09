import React from "react"
import {
    Button,
    Grid,
    Link,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core"
import { Divider } from "./Divider"
import { colors } from "../modules/theme"
import { TitleBar } from "./TitleBar"
import { getRedirectStatus } from "next/dist/lib/load-custom-routes"

export interface ProductProps {
    name: string
    title: string
    desc: JSX.Element
    link: string
    moreAboutLink?: string
}

export interface DisplayProps {
    product: ProductProps
}

const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget
    const fond = event.currentTarget.getElementsByClassName('fond').item(0)! as HTMLDivElement
    fond.style.backgroundImage = "radial-gradient(farthest-corner at 50% 100%, #849994 35%, #AFB9B7 65%)"
    const image = event.currentTarget.getElementsByClassName('image').item(0)! as HTMLDivElement
    image.style.marginTop = "-2.5rem"
    box.style.backgroundColor = "#BFC7C4"
    box.style.boxShadow = "0px 0px 50px #999999"
    box.style.transitionDuration = "500ms"
    image.style.transitionDuration = "500ms"
}

  // This function will be triggered when the mouse pointer is moving out the box
const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget
    const fond = event.currentTarget.getElementsByClassName('fond').item(0)! as HTMLDivElement
    fond.style.backgroundImage = "radial-gradient(farthest-corner at 50% 100%, #849994 15%, #AFB9B7 65%)"
    const image = event.currentTarget.getElementsByClassName('image').item(0)! as HTMLDivElement
    image.style.marginTop = "1rem"
    box.style.boxShadow = "0px 0px 25px #BBBBBB"
    box.style.backgroundColor = "#EBEAE8"
}

const boxClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget
   
    const fond = event.currentTarget.getElementsByClassName('fond').item(0)! as HTMLDivElement
    fond.style.backgroundImage = "radial-gradient(farthest-corner at 50% 100%, #849994 35%, #AFB9B7 65%)"
    const image = event.currentTarget.getElementsByClassName('image').item(0)! as HTMLDivElement
    image.style.marginTop = "-2.5rem"
    box.style.backgroundColor = "#BFC7C4"
    box.style.boxShadow = "0px 0px 50px #999999"
    box.style.transitionDuration = "500ms"
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "relative",
            borderRadius: "20px",
            width: "30rem",
            height: "28rem",
            margin : "1.5rem"
        },
        rootPhone: {
            position: "relative",
            borderRadius: "20px",
            width: "19rem",
            height: "28rem",
            margin : "1rem"
        }
    }
})


export function Product(props: DisplayProps) {
    var name = props.product.name.toLowerCase()
    const theme = useTheme()
    const classes = useStyles(theme)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    if (isMobile) {
        return (
            <>
                <Link href= {props.product?.link}>
                <div 
                    className={classes.rootPhone}
                    style = {{
                        boxShadow : "0px 0px 25px #BBBBBB"
                    }}>
                    
                    <div className="fond" style ={{
                        position: "relative",
                        display : "flex",
                        width : "100%",
                        height : "11rem",
                        borderRadius : "20px 20px 0 0",
                        justifyContent : "center",
                        backgroundImage: "radial-gradient(farthest-corner at 50% 100%, #849994 15%, #AFB9B7 65%)",
                    }}>
                        <img
                            className='image'
                            src={
                                "../produits/" +
                                props.product?.name +
                                ".png"
                            }
                            width={225}
                            style={{
                                position : "absolute",
                                zIndex: 1
                            }}
                        />
                    </div>

                    <div style ={{
                        position: "absolute",
                        width : "100%",
                        zIndex : 2,
                        height : "17rem",
                        bottom : 0,
                        borderRadius : "0 0 20px 20px",
                        backgroundColor : "#EBEAE8"
                    }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                zIndex: 2,
                                margin : "1rem 0 0.7rem 0"
                            }}
                        >
                            <Typography
                                variant="h3"
                                style={{ alignSelf: "center" }}
                            >
                                {props.product?.name}
                            </Typography>
                        </div>
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                zIndex: 2,
                                padding : "0rem 1.5rem 0.5rem 1.5rem",
                                overflow: "hidden"
                            }}>
                            <Typography
                                variant="body2"
                                align="justify"
                            >
                                {props.product?.desc}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Link>
            </>
        )
    }
    return (
        <>
            <Link href= {props.product?.link}>
                <div 
                    onMouseOver={boxMouseOverHandler}
                    onMouseLeave={boxMouseOutHandler}
                    className={classes.root}
                    style = {{
                        boxShadow : "0px 0px 25px #BBBBBB"
                    }}>
                    
                    <div className="fond" style ={{
                        position: "relative",
                        display : "flex",
                        width : "100%",
                        height : "11rem",
                        borderRadius : "20px 20px 0 0",
                        justifyContent : "center",
                        backgroundImage: "radial-gradient(farthest-corner at 50% 100%, #849994 15%, #AFB9B7 65%)",
                    }}>
                        <img
                            className='image'
                            src={
                                "../produits/" +
                                props.product?.name +
                                ".png"
                            }
                            width={225}
                            style={{
                                position : "absolute",
                                zIndex: 1
                            }}
                        />
                    </div>

                    <div style ={{
                        position: "absolute",
                        width : "100%",
                        zIndex : 2,
                        height : "17rem",
                        bottom : 0,
                        borderRadius : "0 0 20px 20px",
                        backgroundColor : "#EBEAE8"
                    }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                zIndex: 2,
                                margin : "1rem 0 0.7rem 0"
                            }}
                        >
                            <Typography
                                variant="h2"
                                style={{ alignSelf: "center" }}
                            >
                                {props.product?.name}
                            </Typography>
                        </div>
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                zIndex: 2,
                                padding : "0rem 1.5rem 0.5rem 1.5rem",
                                overflow: "hidden"
                            }}>
                            <Typography
                                variant="body1"
                                align="justify"
                            >
                                {props.product?.desc}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
