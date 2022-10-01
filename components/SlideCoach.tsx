import { Typography } from "@material-ui/core";
import { PraticienType } from "modules/types";


export interface DisplayProps {
    coach: PraticienType
}

export function SlideCoach(props: DisplayProps) {
    return (
        <a href={`/membres/${props.coach.name.replace(/ /g, '_').toLowerCase()}`}>
            <img
                src={props.coach.photo}
                alt="Nos practiciens"
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
                    {props.coach.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {props.coach.practice1}
                </Typography>
            </div>
        </a>
    )
}