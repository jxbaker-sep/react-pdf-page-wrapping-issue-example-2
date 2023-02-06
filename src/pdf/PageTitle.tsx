import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { fixedHeight, } from "./constants";

interface PageTitleProps {
    title: string;
}

export function PageTitle(props: PageTitleProps) {
    const styles = StyleSheet.create({
        pageTitle: {
            ...fixedHeight(60),
            paddingTop: 27,
            textAlign: "center",
            fontSize: 18,
            color: "blue"
        }
    });

    return <View
        style={styles.pageTitle}
        fixed
    >
        <Text>{props.title}</Text>
    </View>;
}
