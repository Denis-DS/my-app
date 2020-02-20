import React from 'react'
import style from './style.module.css'

export default (props) =>{
return (<button className = {style.Button} onClick = {props.buttonClick}>{props.Simbol}</button>)
}

// export default class Button extends React.Component {
//     clicksHendler = () =>{
//         alert(this.props.appName())
//     }

//     render() {
//         console.log(this.props)
//         return <button onClick={this.clicksHendler} className = {style.Button}>Click me</button>
//     }
// }