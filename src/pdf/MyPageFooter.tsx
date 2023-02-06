import {Text, StyleSheet, View} from "@react-pdf/renderer";
import { fixedWidth } from "./constants";

export function MyPageFooter() {
    const styles = StyleSheet.create({
        footer: {
            ...fixedWidth(768),
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 12,
            marginRight: 12,
            bottom: 10,
            fontSize: 10,
            color: "lightgray"
        },
    });

    return <View
        style={styles.footer}
        fixed
    >
        <Text>
            TEMP
        </Text>
        <Text
            render={({pageNumber}) => `${pageNumber}`}
            fixed
        />
    </View>;

}
