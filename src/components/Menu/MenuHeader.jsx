import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CloseButton from "./CloseButton";
import Typography from "@material-ui/core/Typography";
import "./MenuHeader.css";

const styles = {
    menuHeaderTitle: {
        flex: 1,
        textAlign: "center",
        lineHeight: "24px",
        margin: "13px 10px 13px 30px"
    },
    menuClose: {
        position: "absolute",
        top: 0,
        right: "6px"
    }
};

function MenuHeader(props) {
    const {classes} = props;

    return(
        <div className="menu-header">
            <div className="menu-header-content">
                <Typography classes={{root: classes.menuHeaderTitle}}
                    variant="headline"
                    component="h3"
                >
                    {props.title}
                </Typography>

                <CloseButton
                    classes={{root: classes.menuClose}}
                    onClose={props.onClose}
                />
            </div>

            <Divider />
        </div>
    );
}

export default withStyles(styles)(MenuHeader);
