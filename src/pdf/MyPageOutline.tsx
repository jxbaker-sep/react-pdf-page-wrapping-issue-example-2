import { Page } from "@react-pdf/renderer";
import { dpi } from "./constants";
import { MyPageFooter } from "./MyPageFooter";

export function MyPageOutline(props: {children: JSX.Element[]}) {
    const { children } = props;
    return <Page
        orientation="landscape"
        dpi={dpi}
        size="LETTER"
    >
        {children}
        <MyPageFooter/>
    </Page>;
}
