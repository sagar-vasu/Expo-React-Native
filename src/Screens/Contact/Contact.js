import React from 'react'
import { View, Button } from 'react-native'
import { Text } from 'react-native-elements'

class Contact extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Hi i am Contact Page
                </Text>
                <Button title="Go to Home" onPress={() =>this.props.navigation.navigate('Home')} />

            </View>
        )
    }
}

export default Contact