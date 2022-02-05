import { Page, View, Document, Text, StyleSheet } from '@react-pdf/renderer'

import { titles } from '../CanvasContainer/CanvasContainer'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#8FCB9B',
        justifyContent: 'space-around',
        padding: '10px'
    },
    section: {
        backgroundColor: '#EAE6E5',
        borderRadius: '20px',
        overflow: 'hidden',
        width: '30%',
        minHeight: '106px',
        marginBottom: '20px',
    },
    title: {
        color: '#EAE6E5',
        backgroundColor: '#5B9279',
        height: '35px',
        padding: '10px',
        textAlign: 'center',
        fontSize: '11pt',
    },
    note: {
        width: '100%',
        backgroundColor: '#87ceeb',
        height: '20px',
        borderRadius: '20px',
        padding: '5px',
        marginBottom: '5px'
    }
})

export const DocumentPDF = () => {
    return(
        <Document title='Canvas PDF' author='Canvas by: Juliano Lorenzato'>
            <Page size="A4" style={styles.page}>
{/*                 {fake.map((value, i) => (
                    <View key={i} style={styles.section}>
                        <View style={styles.title}>
                            <Text>{titles[i]}</Text>
                        </View>
                        <Text>
                            {fake[i].map((value, i) => <Text>{value}</Text>)}
                        </Text>
                    </View>
                ))} */}
            </Page>
        </Document>
    )
} 