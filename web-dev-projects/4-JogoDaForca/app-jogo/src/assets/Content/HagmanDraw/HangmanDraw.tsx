import {Head} from "./../../HangmanAssets/HangmanAssets"
import { Body } from "./../../HangmanAssets/HangmanAssets"
import { RightArm } from "./../../HangmanAssets/HangmanAssets"
import { LeftArm } from "./../../HangmanAssets/HangmanAssets"
import { RightLeg } from "./../../HangmanAssets/HangmanAssets"
import { LeftLeg } from "./../../HangmanAssets/HangmanAssets"

type DrawProps = {
    numberOfGuesses:number;
    won?:boolean;
    lost?:boolean;
}

const BODY_PARTS = [<Head/>,<Body/>,<RightArm/>,<LeftArm/>,<RightLeg/>,<LeftLeg/>]
export default function HangmanDraw({numberOfGuesses}:DrawProps){
    return(
        <div style={{position: "relative"}}>
            {BODY_PARTS.slice(0,numberOfGuesses)}
            <div style={{
                height:"50px",
                width:"4.5px",
                background:"darkblue",
                borderColor:"transparent",
                position:"absolute",
                top:"0",
                right:"45.5px",
            }}/>
            <div style={{
                height:"4.5px",
                width:"178px",
                background:"darkblue",
                borderColor: "transparent",
                marginLeft:"70px",
            }}/>
            <div style={{
                height:"360px",
                width:"4.5px",
                background:"darkblue",
                borderColor: "transparent",
                marginLeft:"70px",
            }}/>
            <div style={{
                height:"5px",
                width:"294px",
                background: "darkblue",
                borderColor: "transparent",
                borderRadius: "8px", 
            }}/>
        </div>
    )
}