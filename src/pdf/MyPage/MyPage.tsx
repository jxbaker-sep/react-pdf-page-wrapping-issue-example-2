import { MyTable } from "./MyTable";
import { MyPageOutline } from "../MyPageOutline";
import { PageTitle } from "../PageTitle";

export function MyPage(props: {secondTableRows: unknown[]}) {
    return <MyPageOutline>
        <PageTitle title="Page Title" />
        <MyTable
            title="First Table"
            rows={[1]}
        />
        <MyTable
            title="Second Table"
            rows={props.secondTableRows}
        />
        <MyTable
            title="Third Table"
            rows={[1,2,3]}
        />

    </MyPageOutline>;
}
