import React, {Component} from 'react';
import {Container, Header, Segment} from 'semantic-ui-react';
import config from "../config";

class DashboardComponent extends Component {
    render() {
        return (
            <Segment
                inverted
                textAlign='center'
                className='dashboard-segment'
                vertical
            >
                <Container text>
                    <Header
                        as='h1'
                        content={config.dashboardHeader}
                        inverted
                        className='dashboard-heading'
                    />
                </Container>
            </Segment>
        )
    }
}

export default DashboardComponent;