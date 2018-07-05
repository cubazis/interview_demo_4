import React, {Component} from 'react';
import './Welcome.css';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <h3>Welcome to test React+PHP app</h3>
                        <p>
                            <Button
                                bsStyle="success"
                                bsSize="sm"
                                href="/Login"
                                target="">
                                Login
                            </Button>
                        </p>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}
export default Welcome;