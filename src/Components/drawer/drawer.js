import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
export default class AnatomyExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.row} >
                        <View style={styles.inputWrap} >

                                {
                                    this.props.component
                                }

                        </View >
                    </View>
                    {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    </View> */}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}



const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",

    },

    inputWrap: {
        flex:1,
        borderColor: "#cccccc",
        borderBottomWidth: 0,
        marginBottom: 0,
        marginLeft: 2,
        justifyContent: "space-between",
    },

});



