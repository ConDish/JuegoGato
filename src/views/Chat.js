import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { GiftedChat } from "react-native-gifted-chat";




class Chat extends Component {

    static navigationOptions = {
        title: 'Bienvenido' ,
        headerLeft: null
    }

    constructor(props){
        super(props);
        this.state = {
            username : this.props.navigation.getParam('username'),
            messages : [
                
            ],
            test: 'Hola'
        }
    }

    
    Multiplicacion(numero){
        let datos = '';
        for(let i = 1; i < 11; i++){
            
            datos += numero + " * " + i + " = " + numero * i + "\n";  
        }

        return datos;

    }

    onSend(messages = []){
       
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))

        switch (messages[0].text.toLowerCase()) {
            case 'hola':
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text: "Hola, Soy el mejor Bot en que te puedo colaborar? ",
                            createdAT: new Date(),
                            user: {
                                _id: 2,
                                name: 'Bot Samuel',
                                avatar: 'https://placeimg.com/140/140/any',
                            }
                        }
                    ]),
                }))
                break;
            case 'bien y tu?':
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text: "Bien gracias.",
                            createdAT: new Date(),
                            user: {
                                _id: 2,
                                name: 'Bot Samuel',
                                avatar: 'https://placeimg.com/140/140/any',
                            }
                        }
                    ]),
                }))

                break;

            case 'como estas?':

                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text: "Bien y tu?",
                            createdAT: new Date(),
                            user: {
                                _id: 2,
                                name: 'Bot Samuel',
                                avatar: 'https://placeimg.com/140/140/any',
                            }
                        }
                    ]),
                }))

                break;    
            
            case '1':
                
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text: this.Multiplicacion(1),
                            createdAT: new Date(),
                            user: {
                                _id: 2,
                                name: 'Bot Samuel',
                                avatar: 'https://placeimg.com/140/140/any',
                            }
                        }
                    ]),
                }))

                break;
            case '2':

                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text: this.Multiplicacion(2),
                            createdAT: new Date(),
                            user: {
                                _id: 2,
                                name: 'Bot Samuel',
                                avatar: 'https://placeimg.com/140/140/any',
                            }
                        }
                    ]),
                }))

                break;
            case '3':

                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text: this.Multiplicacion(3),
                            createdAT: new Date(),
                            user: {
                                _id: 2,
                                name: 'Bot Samuel',
                                avatar: 'https://placeimg.com/140/140/any',
                            }
                        }
                    ]),
                }))

                break;        
            
            default:
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text: "El dato no se encuentra.",
                            createdAT: new Date(),
                            user: {
                                _id: 2,
                                name: 'Bot Samuel',
                                avatar: 'https://placeimg.com/140/140/any',
                            }
                        }
                    ]),
                }))
                break;
        }

       

    }

    

    render(){

        return(
           <View style={{ flex: 1}}>
            
               <GiftedChat messages={this.state.messages}
                onSend = {messages => this.onSend(messages)}
                user = {{ _id : 1, }}
               />
           </View>
        )
    }

}

export default Chat;