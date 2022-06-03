import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type props = {
    img: string,
    name: string,
    msg: string,

}
const ConversationList = (conversation: props) => {

    // console.log(conversation);

    return (
        <View style={styles.container}>
            <Image source={{ uri: conversation.img }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{conversation.name}</Text>
                <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.msg}>{conversation.msg.length >= 30 ? conversation.msg.substring(0, 32) + '...' : conversation.msg}</Text>

            </View>
        </View>
    )
}

export default ConversationList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:100,
        paddingTop: 10,
        flexDirection: 'row',
    },
    image: {
        margin: 10,
        width: 70,
        height: 70,
        borderRadius: 50
    },
    info: {
        paddingVertical: 20
    },
    name: {
        fontSize: 20
    },
    msg: {
        fontSize: 15,
        color: '#979799',
    }
})