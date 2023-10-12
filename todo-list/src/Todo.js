import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo({ id, title, completed }) {
    return (
        <div>
            <input type="checkbox" id={id} defaultChecked={completed} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
}