/**
 * Tabela.js
 * 
 * This table shows a simple list of students 
 */

import React,{Component} from "react";

class Table extends Component{

    render(){
        return(
            <table className="table table-hover">
            <thead>
                <tr>
                <td>First Name</td>
                <td>Last Name</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Francisco</td>
                <td>Melo</td>
                </tr>
                <tr>
                <td>First Name</td>
                <td>Last Name</td>
                </tr>
                <tr>
                <td>First Name</td>
                <td>Last Name</td>
                </tr>
            </tbody>
            </table>
        )
    }

}

export default Table;