import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class UserPointsTable extends Component {

    getUserPointsData = (points) => {
        let data = [];

        console.log(points);

        points.forEach(e => {
            data.push({
                id: e.user._id,
                pos: e.pos,
                user: e.user.team,
                round1: e.round1,
                round2: e.round2,
                round3: e.round3,
                round4: e.round4,
                round5: e.round5,
                round6: e.round6,
                round7: e.round7,
                total: e.total
            });  
        });

        return data;
    }
  
    render() {

        const options = {
            hidePageListOnlyOnePage: true
        }

        const columns = [
            {
                text: 'Id',
                dataField: 'id',
                sort: false,
                headerAlign: 'center',
                hidden: true
            },
            {
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
            }
        ]

        return (
          <div className='bf-table'>
            <BootstrapTable 
                keyField='id' 
                data={ this.getUserPointsData(this.props.points) } 
                columns={ columns } 
                striped
                hover
                condensed
                pagination={ paginationFactory( options ) }
            />
          </div>
        )
    }
}