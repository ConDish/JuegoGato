import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Toast, Button, Text, Card, Form, Input, Item } from 'native-base';
import Expo from "expo";


class Inicio extends Component {

    static navigationOptions = {
        title: 'Inicio',
    }


    constructor(props) {
        super(props);

        console.disableYellowBox = true;

        this.state = {
            loading: true,
            username: ''
        }

    }


    goChat(push) {
        push('Chat', { username: this.state.username })
    }


    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });

        this.setState({ loading: false });
    }




    render() {
        const { push, getParam } = this.props.navigation;

        const message = getParam('message', false);



        if (message) {
            Toast.show({ text: message, type: 'danger', duration: 4000 });
        }


        if (this.state.loading) {
            return <Expo.AppLoading />;
        }


        return (
            <Container style={{ padding: 20 }}>

                <Form style={{ marginBottom: 30, marginTop: 20 }}>

                    <Item last>
                        <Input placeholder="Username" onChangeText={(username) => this.setState({ username })} />
                    </Item>

                </Form>

                <Button full onPress={() => this.goChat(push)}>
                    <Text>Iniciar</Text>
                </Button>

            </Container>
        );
    }

}



const styles = StyleSheet.create({

});



export default Inicio;