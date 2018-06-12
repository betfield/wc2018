import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BootstrapTable from 'react-bootstrap-table-next';

export default class FixturesList extends Component {

    formatFixtureData = (data) => {
        let fixturesData = [];
        const fixtureId = this.props.fixtureId;
        let fixture = {};

        data.forEach((e) => {

            let homeTeamCode = String(e.home_team.code).toLowerCase();
            let awayTeamCode = String(e.away_team.code).toLowerCase();

            if (e.locked) {
                let fixture = {
                    time: e.date + " " + e.time,
                    vs: {
                        id: e._id,
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
        let result = "-";
    
        if (cell.homeGoals || cell.awayGoals) {
            result = cell.homeGoals + ":" + cell.awayGoals;
        }
            
        return (
            <span className="bf-table-score">
                <span>{result}</span>
            </span>
        );
    }

    render() {
        const data = this.formatFixtureData(this.props.fixtures);
        const columnHeaders = [
            {
                text: 'Aeg',
                dataField: 'time',
                sort: false,
                headerAlign: 'center'
            }, 
            {
                text: 'Kodu',
                dataField: 'homeTeam',
                headerAlign: 'center'
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
                headerAlign: 'center'
            }, 
            {
                text: 'Tulemus',
                dataField: 'result',
                sort: false,
                headerAlign: 'center',
                formatter: this.resultFormatter
            }
        ];

        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                window.location = "/fixtures/" + row.vs.id;
            }
        };

        const keyField='vs.id'; 

        const options = {
            hidePageListOnlyOnePage: true
        }

        return (
            <div className='bf-table'>
                <BootstrapTable 
                    keyField= {keyField} 
                    data={ data } 
                    rowEvents = {rowEvents}
                    columns={ columnHeaders }
                    bordered={ true }
                    striped
                    hover
                    condensed
                />
            </div>
        )
    }

}