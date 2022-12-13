import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
       // borderWidth:1,
    },
    text:{
        fontFamily:'Mali-Regular',
    },
    containertopbar: {
        margin: '10%',
        marginTop: 0,
       // borderWidth:1,
        justifyContent: 'flex-start',
    },
    container: {
        margin: '10%',
        marginTop: 10,
        justifyContent: 'flex-start',
       // borderWidth:1,
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
    //    borderWidth:1,
        paddingLeft: 13,
        fontSize: 20,
        color: '#464646',
        width: '80%',
    },inputname: {
        paddingTop: 10,
        paddingRight: 10,
       // borderWidth:1,
        paddingLeft: 13,
        fontSize: 20,
        color: '#464646',
        
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
        margin: 0,
        fontSize: 18,
        color: '#000000',
        paddingRight:'10%',

    },
    lable2: {
        
        margin: 0,
        textAlign:'right',
        color: '#FF6813',
        fontSize: 18,
     
        
    },
    footersection: {
        
        margin: "10%",
        marginTop: 10,
        justifyContent: 'flex-start',
       // borderWidth:1,

    },
    center:{
        alignContent:'center',
        alignItems:'center',

    },
    rowsearchSection: {
       // alignItems: 'center',
        backgroundColor: '#EAEAEA',
        borderColor: '#D1D1D1',
        borderWidth: 2,
        borderRadius: 15,
        width:'49%',
        marginRight:5,
        
      },
      avatar: {
        paddingTop: 20,
        height: 100,
        width: 100,
        borderRadius: 100,
        padding: 20,
      },
});
export { styles };