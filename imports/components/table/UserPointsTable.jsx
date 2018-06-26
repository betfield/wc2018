import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

export default class UserPointsTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columnHeaders: this.getTableHeaders()
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeTable);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeTable);
    }

    resizeTable = () => {
        this.setState({
            columnHeaders: this.getTableHeaders()
        });
    }

    //TODO: Use better logic to hide/show columns
    getTableHeaders = () => {
        let columnHeaders = [];
        
        if ($(window).width() < 769) {
            columnHeaders = [
                {
                    text: 'Id',
                    dataField: 'id',
                    headerAlign: 'center',
                    hidden: true
                },
                {
                    text: 'Pos',
                    dataField: 'pos',
                    headerAlign: 'center'
                }, {
                    text: 'Kasutaja',
                    dataField: 'user',
                    headerAlign: 'center',
                    formatter: this.userFormatter
                }, {
                    text: 'I',
                    dataField: 'round1',
                    headerAlign: 'center',
                    hidden: true
                }, {
                    text: 'II',
                    dataField: 'round2',
                    headerAlign: 'center',
                    hidden: true
                }, {
                    text: 'III',
                    dataField: 'round3',
                    headerAlign: 'center',
                    hidden: true
                }, {
                    text: 'IV',
                    dataField: 'round4',
                    headerAlign: 'center',
                    hidden: true
                }, {
                    text: 'V',
                    dataField: 'round5',
                    headerAlign: 'center',
                    hidden: true
                }, {
                    text: 'VI',
                    dataField: 'round6',
                    headerAlign: 'center',
                    hidden: true
                }, {
                    text: 'VII',
                    dataField: 'round7',
                    headerAlign: 'center',
                    hidden: true
                }, {
                    text: 'Kokku',
                    dataField: 'total',
                    headerAlign: 'center'
                }
            ];
        } else if ($(window).width() < 1281) {
            columnHeaders = [
                {
                    text: 'Id',
                    dataField: 'id',
                    headerAlign: 'center',
                    hidden: true
                },
                {
                    text: 'Pos',
                    dataField: 'pos',
                    headerAlign: 'center'
                }, {
                    text: 'Kasutaja',
                    dataField: 'user',
                    headerAlign: 'center',
                    formatter: this.userFormatterSlim
                }, {
                    text: 'I',
                    dataField: 'round1',
                    headerAlign: 'center'
                }, {
                    text: 'II',
                    dataField: 'round2',
                    headerAlign: 'center'
                }, {
                    text: 'III',
                    dataField: 'round3',
                    headerAlign: 'center'
                }, {
                    text: 'IV',
                    dataField: 'round4',
                    headerAlign: 'center'
                }, {
                    text: 'V',
                    dataField: 'round5',
                    headerAlign: 'center'
                }, {
                    text: 'VI',
                    dataField: 'round6',
                    headerAlign: 'center'
                }, {
                    text: 'VII',
                    dataField: 'round7',
                    headerAlign: 'center'
                }, {
                    text: 'Kokku',
                    dataField: 'total',
                    headerAlign: 'center'
                }
            ];
        } else {
            columnHeaders = [
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
                    headerAlign: 'center',
                    formatter: this.userFormatter
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
            ];
        }

        return columnHeaders;
    }

    getUserPointsData = (points) => {
        let data = [];

        points.forEach(e => {
            data.push({
                id: e.user._id,
                pos: e.user.pos,
                user: e.user.team,
                pic: e.user.picture,
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

        data.sort(function (a, b) {
            return a.pos - b.pos;
        });

        return data;
    }
  
    userFormatter = (cell, row) => {
        return (
            <div className="bf-table-points-user">
                <span>
                    <img className="img-circle m-b" src={row.pic} title={cell}/>
                    {cell}
                </span>
            </div>
        )
    }

    userFormatterSlim = (cell, row) => {
        return (
            <div className="bf-table-points-user">
                <img className="img-circle m-b" src={row.pic} title={cell}/>
            </div>
        )
    }

    render() {

        const columns = this.state.columnHeaders;

        return (
          <div className='bf-table'>
            <BootstrapTable 
                keyField='id' 
                data={ this.getUserPointsData(this.props.points) } 
                columns={ columns } 
                striped
                hover
                condensed
            />
          </div>
        )
    }
}