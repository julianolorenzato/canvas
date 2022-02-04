import { Page, View, Document, Text, StyleSheet } from '@react-pdf/renderer'

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
        height: '50px',
    }
})


export const DocumentPDF = () => {
    const abab = [1, 2, 3, 4, 534, 3422 ,423, 2, 34, 2, 423, 2,]
    return(
        <Document title='Canvas PDF' author='Canvas by: Juliano Lorenzato'>
            <Page size="A4" style={styles.page}>
                {abab.map((value, key) => (
                    <View key={key} style={styles.section}>
                        <View style={styles.title}>
                            <Text>{value}</Text>
                        </View>
                        <Text>

                        </Text>
                    </View>
                ))}
            </Page>
        </Document>
    )
} 