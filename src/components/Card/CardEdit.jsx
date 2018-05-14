import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as colors from "../../constants/CardColors";
import "./CardEdit.css";

function CardEdit(props) {
    const {title, text, color, onTitleChange, onTextChange, onColorChange} = props;

    return (
        <React.Fragment>
            <TextField
                className="card-edit-title"
                value={title}
                onChange={onTitleChange}
                floatingLabelText="Title"
                underlineStyle={{borderColor: "gray"}}
            />

            <TextField
                className="card-edit-text"
                value={text}
                onChange={onTextChange}
                floatingLabelText="Text"
                multiLine={true}
                rows={5}
                rowsMax={5}
                underlineStyle={{borderColor: "gray"}}
            />

            <RadioGroup
                name="cardColor"
                value={color}
                onChange={onColorChange}
            >
                <FormControlLabel
                    value={colors.RED}
                    control={<Radio />}
                    label={colors.RED_LABEL}
                />
                <FormControlLabel
                    value={colors.WHITE}
                    control={<Radio />}
                    label={colors.WHITE_LABEL}
                />
                <FormControlLabel
                    value={colors.GREEN}
                    control={<Radio />}
                    label={colors.GREEN_LABEL}
                />
                <FormControlLabel
                    value={colors.BLUE}
                    control={<Radio />}
                    label={colors.BLUE_LABEL}
                />
            </RadioGroup>
        </React.Fragment>
    );
}

export default CardEdit;



// import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
// import ColorChecked from "material-ui/svg-icons/toggle/radio-button-checked";
// import ColorUnchecked from "material-ui/svg-icons/image/brightness-1";

// {/*<RadioButtonGroup*/}
// {/*name="cardColor"*/}
// {/*defaultSelected={color}*/}
// {/*onChange={onColorChange}*/}
// {/*>*/}
// {/*<RadioButton*/}
// {/*className="card-edit-color"*/}
// {/*value={colors.RED}*/}
// {/*label={colors.RED_LABEL}*/}
// {/*checkedIcon={<ColorChecked style={{fill: colors.RED}} />}*/}
// {/*uncheckedIcon={<ColorUnchecked style={{fill: colors.RED}} />}*/}
// {/*/>*/}
// {/*<RadioButton*/}
// {/*className="card-edit-color"*/}
// {/*value={colors.WHITE}*/}
// {/*label={colors.WHITE_LABEL}*/}
// {/*/>*/}
// {/*<RadioButton*/}
// {/*className="card-edit-color"*/}
// {/*value={colors.GREEN}*/}
// {/*label={colors.GREEN_LABEL}*/}
// {/*checkedIcon={<ColorChecked style={{fill: colors.GREEN}} />}*/}
// {/*uncheckedIcon={<ColorUnchecked style={{fill: colors.GREEN}} />}*/}
// {/*/>*/}
// {/*<RadioButton*/}
// {/*className="card-edit-color"*/}
// {/*value={colors.BLUE}*/}
// {/*label={colors.BLUE_LABEL}*/}
// {/*checkedIcon={<ColorChecked style={{fill: colors.BLUE}} />}*/}
// {/*uncheckedIcon={<ColorUnchecked style={{fill: colors.BLUE}} />}*/}
// {/*/>*/}
// {/*</RadioButtonGroup>*/}