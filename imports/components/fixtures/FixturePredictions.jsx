import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class FixturesPredictions extends Component {

    formatPredictionsData = (data) => {
        let predictionsData = [];

        data.forEach((e) => {
            let prediction = {
                result: {
                    homeGoals: e.fixture.result.home_goals,
                    awayGoals: e.fixture.result.away_goals,
                    userPoints: e.fixture.result.userPoints,
                    user: e.userId
                }
            }

            console.log(prediction);

            predictionsData.push(prediction);
        })

        return predictionsData;
    }

    getFixtureDetails = (f) => {
        if (this.props.fixturesReady) {
            console.log(f);

            let homeTeamCode = String(f.home_team.code).toLowerCase();
            let awayTeamCode = String(f.away_team.code).toLowerCase();

            let fixture = {
                time: f.date + " " + f.time,
                homeFlag: Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png",
                awayFlag: Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png",
                homeTeam: f.home_team.name,
                awayTeam: f.away_team.name,
                group: f.group,
                round: f.roundRoman
            }

            if (f.result.home_goals || f.result.away_goals) {
                fixture.result = f.result.home_goals + ":" + f.result.away_goals;
            }

            console.log(fixture);

            return (
                <table className="bf-table table table-striped table-hover table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>Aeg</th>
                            <th>Kodu</th>
                            <th></th>
                            <th>Võõrsil</th>
                            <th>Grupp</th>
                            <th>Voor</th>
                            <th>Tulemus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{fixture.time}</td>
                            <td>{fixture.homeTeam}</td>
                            <td>
                                <span className="bf-table-vs">
                                    <img src={fixture.homeFlag}/>
                                    <span> vs </span>
                                    <img src={fixture.awayFlag}/>
                                </span>
                            </td>
                            <td>{fixture.awayTeam}</td>
                            <td>{fixture.group}</td>
                            <td>{fixture.round}</td>
                            <td>
                                <span className="bf-table-score">
                                <span>{fixture.result}</span>
                            </span></td>
                        </tr>
                    </tbody>
                </table>
            );
        } else {
            return null;
        }
    }

    userFormatter = (cell, row) => {
        return (
            <span className="bf-table-user">
                <span>{cell}</span>
            </span>
        );
    }

    resultFormatter = (cell, row) => {
        let result = "";
    
        if (cell.homeGoals || cell.awayGoals) {
            result = cell.homeGoals + ":" + cell.awayGoals;
        }
            
        return (
            <span className="bf-table-score">
                <span>{result}</span>
            </span>
        );
    }

    pointsFormatter = (cell, row) => {
        let points = "";
    
        if (cell) {
            points = cell + "p";
        }
            
        return (
            <span className="bf-table-score">
                <span>{points}</span>
            </span>
        );
    }

    render() {

        const data = this.formatPredictionsData(this.props.predictions);
        const columnHeaders = [
            {
                text: 'Kasutaja',
                dataField: 'result.user',
                sort: true,
                headerAlign: 'center',
                formatter: this.userFormatter
            }, 
            {
                text: 'Ennustus',
                dataField: 'result',
                sort: false,
                headerAlign: 'center',
                formatter: this.resultFormatter
            },
            {
                text: 'Punktid',
                dataField: 'result.userPoints',
                sort: true,
                headerAlign: 'center',
                formatter: this.pointsFormatter
            }
        ];
            
        const keyField='result.user' 
    
        const options = {
            hidePageListOnlyOnePage: true
        }

        return (
            <div>
                { this.getFixtureDetails(this.props.fixture) }
                <br/>
                <div className='bf-table-header'></div>
                <div className='bf-table'>
                    <BootstrapTable 
                        keyField= {keyField} 
                        data={ data } 
                        columns={ columnHeaders }
                        bordered={ true }
                        striped
                        hover
                        condensed
                        pagination={ paginationFactory( options ) }
                    />
                </div>
            </div>
        )
    }

}