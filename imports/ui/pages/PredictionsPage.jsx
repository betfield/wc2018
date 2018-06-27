import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import PortalPage from './PortalPage';
import PredictionsContainer from '../../components/predictions/PredictionsContainer';
import Filter from '../layouts/portal/Filter';

export default class PredictionsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groupSelected: 'All'
        };
        this.domNode = document.createElement('div');
    }

    selectGroup = (group) => {
        this.setState({ groupSelected: group });
    }

    renderFilter() {
        return ReactDOM.createPortal(
            <Filter filter="finals" selectGroup={this.selectGroup}/>,
            this.domNode
        )
    }

    componentWillMount() {

        //Check if user is logged in
        if (!Meteor.userId()) {
            Bert.alert( 'Ennustuste vaatamiseks pead sisse logima', 'danger' );
            this.props.history.push('/login');
        } 
        //If user  exist then proceed with the normal login flow
    }

    componentDidMount() {
        document.getElementById("filter").appendChild(this.domNode);
    }

    render() {

        return (
            <PortalPage title="Ennustused">
                <PredictionsContainer groupSelected={this.state.groupSelected}/>
                {this.renderFilter()}
            </PortalPage>
        )
    }
}