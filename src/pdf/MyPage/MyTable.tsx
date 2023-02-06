import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { PropsWithChildren } from "react";
import { fixedHeight, fixedSize, fixedWidth, hyphenateAnywhere } from "../constants";

interface MyTableProps {
    title: string;
    rows: unknown[];
}

export function MyTable(props: MyTableProps) {
    const styles = StyleSheet.create({
        table: {
            marginBottom: 12
        },
        tableHeader: {
            fontSize: 12,
            left: 0,
            right: 0,
            textAlign: "center",
            marginBottom: 0,
            justifyContent: "center"
        },
        rowHead: {
            fontSize: 10,
        },
        total: {
            fontSize: 10
        },
        rowSubhead: {
            fontSize: 8
        },
        colHead: {
            fontSize: 10,
            textAlign: "center",
        },
        dataCell: {
            fontSize: 10,
            textAlign: "right",
            backgroundColor: "lightgray",
            paddingRight: 12,
        },
        totalsCell: {
            fontSize: 10,
            textAlign: "right",
            backgroundColor: "lightgray",
            paddingRight: 12,
        },
        firstCell: {
            ...fixedWidth(134)
        },
        subtotalRow: {
            marginTop: 1
        }
    });

    return <View
        style={styles.table}
    >
        <View
            minPresenceAhead={80}
            fixed
        >
            <View style={styles.tableHeader}><Text>{props.title}</Text></View>
            <Row>
                <Cell style={styles.firstCell} />
                <Cell style={styles.colHead}><Text>Col Head 1</Text></Cell>
                <Cell style={styles.colHead}><Text>Col Head 2</Text></Cell>
                <Cell style={styles.colHead}><Text>Col Head 3</Text></Cell>
                <Cell style={styles.colHead}><Text>Col Head 4</Text></Cell>
                <Cell style={styles.colHead}><Text>Col Head 5</Text></Cell>
            </Row>
        </View>
        {
            props.rows.map((_, index) => <Row key={index}>
                <Cell style={styles.firstCell}>
                    <View style={{...fixedSize(120, 13), textOverflow: undefined}}>
                        <Text
                            style={styles.rowHead}
                            hyphenationCallback={hyphenateAnywhere}
                        >
                            ABCDEF
                        </Text>
                    </View>
                </Cell>
                <Cell style={styles.dataCell}>
                    <Text>{(1000)}</Text>
                </Cell>
                <Cell style={styles.dataCell}>
                    <Text>{(2000)}</Text>
                </Cell>
                <Cell style={styles.dataCell}>
                    <Text>{(3000)}</Text>
                </Cell>
                <Cell style={styles.dataCell}>
                    <Text>{(4000)}</Text>
                </Cell>
                <Cell style={styles.totalsCell}>
                    <Text>{(5000)}</Text>
                </Cell>
            </Row>)
        }
    </View>;
}

interface RowProps extends PropsWithChildren {
    fixed?: boolean;
    style?: Style;
}

function Row(props: RowProps) {
    const styles = StyleSheet.create({
        row: {
            left: 24,
            ...fixedHeight(26),
            flexDirection: "row",
            marginBottom: 2
        }
    });
    return <View
        style={{...styles.row, ...props.style}}
        fixed={props.fixed}
        minPresenceAhead={24}
    >
        {props.children}
    </View>;
}

interface CellProps extends PropsWithChildren {
    style?: Style;
}

function Cell(props: CellProps) {
    const styles = StyleSheet.create({
        cell: {
            ...fixedWidth(120),
            flexDirection: "column",
            marginRight: 2,
            justifyContent: "center"
        }
    });
    return <View style={{...styles.cell, ...props.style}}>
        {props.children}
    </View>;
}