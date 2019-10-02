import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
export default class ButtonIconExample extends Component {
    render() {
        return (

            <Button iconLeft>
                <Icon name={this.props.icon} />
                <Text>{this.props.title}</Text>
            </Button>

        );
    }
}