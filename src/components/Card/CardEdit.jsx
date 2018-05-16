import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ColorChecked from "@material-ui/icons/RadioButtonChecked";
import ColorUnchecked from "@material-ui/icons/Brightness1";
import * as colors from "../../constants/CardColors";

function CardEdit(props) {
    const {title, text, color, onTitleChange, onTextChange, onColorChange} = props;

    return (
        <React.Fragment>
            <TextField
                id="cardEditTitle"
                label="Title"
                value={title}
                onChange={onTitleChange}
                margin="normal"
                autoFocus
                fullWidth
            />

            <TextField
                id="cardEditText"
                label="Text"
                value={text}
                onChange={onTextChange}
                margin="normal"
                multiline
                rows="5"
                fullWidth
            />

            <RadioGroup
                name="cardColor"
                value={color}
                onChange={onColorChange}
            >
                <FormControlLabel
                    value={colors.RED}
                    control={<Radio
                        icon={<ColorUnchecked style={{fill: colors.RED}} />}
                        checkedIcon={<ColorChecked style={{fill: colors.RED}} />}
                    />}
                    label={colors.RED_LABEL}
                />
                <FormControlLabel
                    value={colors.WHITE}
                    control={<Radio color="default" />}
                    label={colors.WHITE_LABEL}
                />
                <FormControlLabel
                    value={colors.GREEN}
                    control={<Radio
                        icon={<ColorUnchecked style={{fill: colors.GREEN}} />}
                        checkedIcon={<ColorChecked style={{fill: colors.GREEN}} />}
                    />}
                    label={colors.GREEN_LABEL}
                />
                <FormControlLabel
                    value={colors.BLUE}
                    control={<Radio
                        icon={<ColorUnchecked style={{fill: colors.BLUE}} />}
                        checkedIcon={<ColorChecked style={{fill: colors.BLUE}} />}
                    />}
                    label={colors.BLUE_LABEL}
                />
            </RadioGroup>
        </React.Fragment>
    );
}

export default CardEdit;
