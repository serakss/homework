import React from 'react'
import classes from "./Message.module.css";

type PropsMessageType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: PropsMessageType) {
    return (
        <div>

            <span> <img src={props.avatar} width="100" height="100"/></span>
            <span className={classes.message}>
               {props.name}
                {props.message}
                {props.time}
            </span>

        </div>
    )
}

export default Message
