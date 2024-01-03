import React from "react";
import { useNavigate } from "react-router-dom"
import { Props } from "react-select"
import { MenuItem, Typography, Popover } from "@mui/material"

type optionFormate = { label: string, value: string }
type selectOptionType = Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    | "options"
    | "onChange"
    | "axisX"
    | "axisY"
    | "isOpen"
> &
    Partial<{
        options: Array<optionFormate>,
        onChange: (e: any) => void,
        axisX: number,
        axisY: number,
        isOpen: boolean,
        anchorEl : any
    }>


const Dropdown: React.FC<selectOptionType> = (props) => {
    const navigation = useNavigate()
    return (
        <React.Fragment>
            <Popover
               open={props.isOpen}
               onClose={props.onChange}
               anchorPosition={{ top: props?.axisY,left:props?.axisX}}
               anchorOrigin={{vertical:"top",horizontal:"center"}}
               anchorEl={props?.anchorEl}
            >
                <Typography sx={{  padding: "10px", backgroundColor: "green",width:"200px" }}>
                    {
                        props?.options && props.options.length > 0 &&
                        props.options.map((item: optionFormate, key: number) => (
                            <MenuItem 
                               key={key} 
                               onClick={() => {
                                navigation(`${item.value}`)
                                props.onChange("")
                            }}
                            >
                                {item.label}
                            </MenuItem>
                        ))
                    }
                </Typography>
            </Popover>
        </React.Fragment>
    )
}


export default Dropdown