import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class FixturesList extends Component {

    formatFixtureData = (data) => {
        let fixturesData = [];

        console.log(data);

        data.forEach((e) => {
            let homeTeamCode = String(e.home_team.code).toLowerCase();
            let awayTeamCode = String(e.away_team.code).toLowerCase();

            if (e.status === "FT") {
                let fixture = {
                    time: e.date + " " + e.time,
                    vs: {
                        homeFlag: Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png",
                        awayFlag: Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png"
                    },
                    homeTeam: e.home_team.name,
                    awayTeam: e.away_team.name,
                    group: e.group,
                    round: e.roundRoman,
                    result: {
                        homeGoals: e.result.home_goals,
                        awayGoals: e.result.away_goals
                    },
                    id: e._id
                }

                fixturesData.push(fixture);
            }
        })

        return fixturesData;
    }

    vsFormatter = (cell, row) => {
        return (
            <span className="bf-table-vs">
                <img src={cell.homeFlag}/>
                <span> vs </span>
                <img src={cell.awayFlag}/>
            </span>
        );
    }

    resultFormatter = (cell, row) => {
        return (
            <span className="bf-table-score">
                <span>{cell.homeGoals} : {cell.awayGoals}</span>
            </span>
        );
    }

    render() {
        const options = {
            hidePageListOnlyOnePage: true
        }

        const columnHeaders = [
            {
                text: 'Id',
                dataField: 'id',
                sort: false,
                headerAlign: 'center',
                hidden: true
            },
            {
                text: 'Aeg',
                dataField: 'time',
                sort: false,
                headerAlign: 'center'
            }, 
            {
                text: 'Kodu',
                dataField: 'homeTeam',
                headerAlign: 'center',
                formatter: this.teamFormatter
            }, 
            {
                text: '',
                dataField: 'vs',
                headerAlign: 'center',
                formatter: this.vsFormatter
            }, 
            {
                text: 'Võõrsil',
                dataField: 'awayTeam',
                headerAlign: 'center'
            }, 
            {
                text: 'Grupp',
                dataField: 'group',
                sort: true,
                headerAlign: 'center'
            }, 
            {
                text: 'Voor',
                dataField: 'round',
                sort: true,
                headerAlign: 'center'
            }, 
            {
                text: 'Tulemus',
                dataField: 'result',
                sort: false,
                headerAlign: 'center',
                formatter: this.resultFormatter
            }
        ]

        return (
            <div className='bf-table'>
                <BootstrapTable 
                    keyField='id' 
                    data={ this.formatFixtureData(this.props.fixtures) } 
                    columns={ columnHeaders }
                    bordered={ true }
                    striped
                    hover
                    condensed
                    pagination={ paginationFactory( options ) }
                />
            </div>
        )
    }

}