import React, { useContext } from 'react'
import { FirstContext } from '../../App';



export default function GrandChild() {
    const data = useContext(FirstContext);
    return (
        <div>GrandChild: {data}</div>
    )
}
