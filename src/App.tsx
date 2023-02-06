import { Document, PDFViewer } from "@react-pdf/renderer";
import { MyPage } from "pdf/MyPage/MyPage";
import { useState } from "react";


export default function App() {
    const [pageRows, setPageRows] = useState<unknown[]>([1,2,3,4,5,6,7,8,9,10]);

    const switchToFooterOverflow = () => setPageRows([1,2,3,4,5,6,7,8,9,10]);
    const switchToZeroRowsAtBottomOfPage = () => setPageRows([1,2,3,4,5,6,7,8,9,10,11,12,13]);

    return <div>

        <div><a href="#" onClick={switchToFooterOverflow} >Show Table not wrapping before footer</a></div>
        <div><a href="#" onClick={switchToZeroRowsAtBottomOfPage} >Show Table Header and Column Without Any Rows at bottom of page</a></div>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document>
                <MyPage secondTableRows={pageRows} />
            </Document>
        </PDFViewer>

    </div>;
}