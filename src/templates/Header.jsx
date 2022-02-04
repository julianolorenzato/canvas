import './Header.scss'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { DocumentPDF } from '../components/DocumentPDF/DocumentPDF'

export function Header() {
    return (
        <div className='Header'>
            <div className="Header-empty"></div>
            <div className='Header-titles'>
                <h1>Modelo de Negócios</h1>
                <span>Feito por: Juliano Lorenzato</span>
            </div>
            

            <div className='Header-btns'>
                <PDFDownloadLink document={<DocumentPDF />} fileName="CanvasPDF.pdf">
                    {({ loading }) =>
                    loading ? 'Loading document...' : <button>Salvar como PDF</button>
                    }
                </PDFDownloadLink>
            </div>

            
        </div>
    )
}