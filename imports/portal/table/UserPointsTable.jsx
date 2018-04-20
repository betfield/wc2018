import React, { Component } from 'react';

export default class UserPointsTable extends Component {

    componentDidMount() {
        // Initialize Predictions table

        //jQuery nussib ära Animation delay
       // $('#userPoints').footable();
    }

    render() {

        let position = round1 = round2 = round3 = round4 = round5 = round6 = round7 = total = 0;
        let user = {
            team: "Braavo"
        }

        return (
            <table id="userPoints" className="footable table table-stripped" data-page-size="100">
                <thead>
                    <tr>
                        <th data-className="bf-table-points" data-sort-ignore="true" className="bf-center">Pos</th>
                        <th data-className="bf-table-team" data-sort-ignore="true">Kasutaja</th>
                        <th data-className="bf-table-points" className="bf-center">I</th>
                        <th data-className="bf-table-points" className="bf-center">II</th>
                        <th data-className="bf-table-points" className="bf-center">III</th>
                        <th data-className="bf-table-points" className="bf-center">IV</th>
                        <th data-className="bf-table-points" className="bf-center">V</th>
                        <th data-className="bf-table-points" className="bf-center">VI</th>
                        <th data-className="bf-table-points" className="bf-center">VII</th>
                        <th data-className="bf-table-points" className="bf-center">Kokku</th>
                    </tr>
                </thead>
                <tbody id="pred-body">
                    <tr>
                        <td className="bf-table-points bf-center">{position}</td>
                        <td className="bf-table-team">{user.team}</td>
                        <td className="bf-table-points">{round1}</td>
                        <td className="bf-table-points">{round2}</td>
                        <td className="bf-table-points">{round3}</td>
                        <td className="bf-table-points">{round4}</td>
                        <td className="bf-table-points">{round5}</td>
                        <td className="bf-table-points">{round6}</td>
                        <td className="bf-table-points">{round7}</td>
                        <td className="bf-table-points">{total}</td>
                    </tr>
                </tbody>	
            </table>
        )
    }
}