import React from 'react'
import { View, Button, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'


class Home extends React.Component {

render() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>
                    Hi i am Home Page
                    </Text>
                <Button title="Go to About" onPress={() => this.props.navigation.navigate('About')} />
            </View>
        </SafeAreaView>

    )
}
}

export default Home