import React from "react";
import { StyleSheet } from "../StyleSheet";

export default class MouseUsedTime extends React.Component {
    render() {
        return (
            <iframe src="/bar-chart" style={styles.frame}></iframe>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
        border: "none",
        width: "100%",
        overflow: "hidden"
    }
});