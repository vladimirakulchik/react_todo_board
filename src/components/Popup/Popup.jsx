import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {
    popupPaper: {
        backgroundColor: "snow",
        borderRadius: "10px"
    },
    popupContent: {
        padding: "0 16px 8px 16px"
    },
    actionBtn: {
        margin: "5px 16px",
        minWidth: "100px"
    },
    deleteBtn: {
        position: "absolute",
        left: "16px",
        minWidth: "100px"
    }
};

function Popup(props) {
    const {classes, title, isOpen, isDelete, onDelete, onSave, onCancel, children} = props;

    return (
        <Dialog
            classes={{paper: classes.popupPaper}}
            open={isOpen}
            onClose={onCancel}
        >
            <DialogTitle>{title}</DialogTitle>

            <DialogContent classes={{root: classes.popupContent}}>{children}</DialogContent>

            <DialogActions>
                {isDelete &&
                    <Button
                        classes={{root: classes.deleteBtn}}
                        onClick={onDelete}
                        variant="raised"
                        color="primary"
                    >
                        Delete
                    </Button>
                }

                <Button
                    classes={{root: classes.actionBtn}}
                    onClick={onSave}
                    variant="raised"
                    color="primary"
                >
                    Save
                </Button>

                <Button
                    classes={{root: classes.actionBtn}}
                    onClick={onCancel}
                    variant="raised"
                    color="primary"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default withStyles(styles)(Popup);
