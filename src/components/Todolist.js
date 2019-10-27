import React from "react";
import { StyleSheet } from "../StyleSheet";

export default class ScreenUsedTime extends React.Component {
    render() {
        return (
            <iframe src="/todolist" style={styles.frame}></iframe>
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
