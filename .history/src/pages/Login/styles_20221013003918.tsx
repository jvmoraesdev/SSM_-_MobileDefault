
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',

    },

    buttonText: {

    },

    buttonIcon: {

    },

    input: {
        height: 60,
        backgroundColor: '#FFF',
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 20,
        borderBottomWidth: .5,
        width: 250,
        maxWidth: 250,
    },

    bottonForm: {
        flex: 3
    },

    logo: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
    },

    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#9F3156',
    },

    logoIcon: {
        color: '#9F3156',
    },

    logotext: {
        fontFamily: 'Roboto_500Medium',
        color: '#9F3156',
        fontSize: 30
    },

    header: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // maxHeight: 260
    },

    body: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // maxHeight: 400,
        backgroundColor: 'white'
    },

    footer: {
        flex: 1,
    },

    text: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 48,
        color: 'white',
        textAlign: 'center'
    }

})

export default styles;