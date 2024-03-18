import { getCurrentDate, getCurrentTime } from 'utils/timeUtils'

const date = getCurrentDate()
const time = getCurrentTime()
export const reportPreviewDummyData = {
    organizationName: 'Shaurya Soft',
    reportBasis: 'Accural',
    generatedBy: 'Daman',
    pageNumber: 'Page 1 of 1',
    generatedDate: date,
    generatedTime: time
}
export const  pageFontFamilyObj= {
    ubuntu:{
        fontname:'Ubuntu',
        fontDescription:'Supports English and European languages. This font can also render Indian Rupees Symbol.'
    },
    openSans:{
        fontname:'Open Sans',
        fontDescription:'Supports English, German, Spanish, French, Italian, Dutch, Polish, Portugese, Swedish, Catalan, Czech, Maltese, Russian and Slovenian language characters.'
    },
    dejaVuSans:{
        fontname:'DejaVu Sans',
        fontDescription:'Supports Latin, Greek, Hebrew, Georgian, Armanian and Cyrillic scripts.'
    },
    hind:{
        fontname:'Hind',
        fontDescription:'Supports Hindi and Marathi characters.'
    },
    hindMadurai:{
        fontname:'Hind Madurai',
        fontDescription:'Supports Tamil characters.'
    }
}