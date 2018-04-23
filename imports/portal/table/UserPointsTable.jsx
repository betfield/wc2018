import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

export default class UserPointsTable extends Component {

    componentDidMount() {

    }

    render() {

        const columns = [{
            text: 'Pos',
            dataField: 'pos',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'Kasutaja',
            dataField: 'user',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'I',
            dataField: 'round1',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'II',
            dataField: 'round2',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'III',
            dataField: 'round3',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'IV',
            dataField: 'round4',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'V',
            dataField: 'round5',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'VI',
            dataField: 'round6',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'VII',
            dataField: 'round7',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'Kokku',
            dataField: 'total',
            sort: true,
            headerAlign: 'center'
          }]
        
        const data = [
            {
                pos: 1,
                user: "Juhhei",
                round1: 0,
                round2: 2,
                round3: 0,
                round4: 45,
                round5: 5,
                round6: 8,
                round7: 3,
                total: 10
            },
            {
                pos: 2,
                user: "Saabas",
                round1: 20,
                round2: 23,
                round3: 10,
                round4: 5,
                round5: 6,
                round6: 9,
                round7: 2,
                total: 14
            }
        ]

        return (
            <BootstrapTable 
                keyField='id' 
                data={ data } 
                columns={ columns } 
                striped
                hover
                condensed
            />
        )
    }
}