export const css = {
    seperator: {
        borderBottom: '1px solid #ccc'
    },
    heading: {
        fontsize: {
            fontSize: '14px',
            fontWeight: '600',
            paddingBottom: '20px',
            paddingTop: '20px',
        }
    },
   
    inputBox:{
        paddingBottom:'24px',
        paddingRight:'24px'
    },
    fontFamilyBox:{
        padding:'30px 0'
    },
    fontFamilyText:{
        paddingTop:'24px',
        fontSize:'12px',
        lineHeight:'20px'
    },
    box: {
        backgroundColor: '#eef2f6'
        , padding: "34px 24px 24px 24px",
        borderRadius: '10px'
    },
    previewText: {
        padding: "0px 0px 24px 0px",
    },

    paper: {
        borderRadius: '0px',
        padding: '20px'
    },
    container: {
        display: 'flex',
        justifyContent: ' space-between', /* Aligns items at start, middle, and end */
        alignItems: 'center', /* Centers items vertically */

    },
    center: {
        alignSelf: 'center'
    },
    left: { alignSelf: 'flex-start' },
    right: { alignSelf: 'flex-end' },
    horizontalCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    previewFont: {
        base: {
            fontSize: '10px',
            paddingTop: '10px'
        },
        organizationName: {
            fontSize: '12px',
            color:'#666666',
            marginBottom:'10px'
        },
        reportBasis: {
            fontSize: '16px',
            marginBottom:'20px'

        },
        time:{
            fontSize: '10px',
            paddingTop: '5px'

        }
    },
    table: {
        borderRadius: '0px'
    },
    tableDensity: {
        classic: {
            padding: '16px'
        },
        compact: {
            padding: '14px',
        },
        superCompact: {
            padding: '12px'
        }
    },
    tableDesign: {
        default: {
            backgroundColor: '#ececec',
        },
        bordered: { border: '1px solid #ebeaf2' },
    }
}