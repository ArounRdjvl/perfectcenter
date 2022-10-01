import { Typography } from "@material-ui/core";
import { ProduitType } from "modules/types";

export interface DisplayProps {
    product: ProduitType
}

export function SlideProduct(props: DisplayProps) {
    return (
        <>
            <img
                src={props.product.photo}
                alt="Nos produits"
                style={{
                    display: 'block',
                    width: '100%',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    padding: '1rem 1.5rem',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    background: 'linear-gradient(transparent, 35%, #404040)',
                }}
            >
                <Typography variant="h2" color="textSecondary">
                    {props.product.name}
                </Typography>
            </div>
        </>
    )
}