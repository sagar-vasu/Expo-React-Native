import React from 'react'
import { View, Button } from 'react-native'
import { Text } from 'react-native-elements'

class About extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Hi i am About Page
        </Text>

        <Button title="Go to Contact" onPress={() =>this.props.navigation.navigate('Contact')} />

      </View>
    )
  }
}

export default About