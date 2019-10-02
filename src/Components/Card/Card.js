import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
export default class CardShowcaseExample extends Component {
    render() {
        return (
            // <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                <Card style={{width:'50%',float:'right'}}>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>NativeBase</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AxzUho_ShbFt5UwEjT-Y9iHB-hlqPHY8V-YjqBfwSdNa_bExow' }} style={{ height: 200, width: 200 }} />
                            <Text>
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="eye" />
                                <Text>View Card</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>


            // </View>

        );
    }
}