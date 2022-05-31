/**
 * Tabela02.js
 * 
 * This table shows a simple list of students 
 */

import React,{Component} from "react";

function Header(){
    return (
    <thead>
        <tr>
        <td>First Name</td>
        <td>Last Name</td>
        </tr>
    </thead>)
   
}
// o const tem que estar sempre definida antes da sua utilização, a function nao precisa !!!!!!!!!
const Body = () => {
    return (
        <tbody>
            <tr>
                <td>Francisco</td>
                <td>Melo</td>
            </tr>

            <tr>
                <td>Maria</td>
                <td>Teste</td>
            </tr>

            <tr>
                <td>First Name</td>
                <td>Last Name</td>
            </tr>
    </tbody>
    )
    
}


class Table02 extends Component{

    render(){
        return(
            <table className="table table-hover">

                <Header />
                <Body />

            </table>
        )
    }

}

export default Table02;