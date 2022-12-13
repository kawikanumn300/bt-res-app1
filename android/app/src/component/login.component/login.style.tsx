import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    text:{
        fontFamily:'Mali-Regular',
    },
    containertopbar: {
        margin: '10%',
        marginTop: 0,
        justifyContent: 'flex-start',
       // borderWidth:1,
    },
    container: {
        margin: '10%',
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    button: {
        height: 50,
        width: 290,
        borderRadius: 30,
        backgroundColor: "#095FC2",
        alignItems: 'center',
        justifyContent: 'center',
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },

    buttonText: {
        fontSize: 20,
        textAlign: 'center'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        borderColor: '#D1D1D1',
        borderWidth: 2,
        borderRadius: 15,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize: 20,
        color: '#464646',
        width: '80%',
    },
    action: {
        marginLeft: '40%',
    },
    labelsignin: {
        margin: 5,
        fontSize: 20,
        color: '#464646',
    },
    label: {
        margin: 5,
        fontSize: 18,
        color: '#000000',
        paddingRight:'5%',

    },
    lable2: {
        
        margin: 5,
        textAlign:'right',
        color: '#FF6813',
        fontSize: 18,
        
    },
    footersection: {
        marginTop:'20%',

    },
    tinyLogo: {
        width: 40,
        height: 40,
        margin: 10,
    },
    center:{
        alignContent:'center',
        alignItems:'center',

    },

});
export { styles };