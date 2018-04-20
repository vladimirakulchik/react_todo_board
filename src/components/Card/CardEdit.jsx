import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ColorChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import ColorUnchecked from 'material-ui/svg-icons/image/brightness-1';
import * as colors from '../../constants/CardColors';
import './CardEdit.css';

class CardEdit extends React.Component {
    render() {
        const {title, text, color, onTitleChange, onTextChange, onColorChange} = this.props;

        return (
            <div>
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

                <RadioButtonGroup
                    name="cardColor"
                    defaultSelected={color}
                    onChange={onColorChange}
                >
                    <RadioButton
                        className="card-edit-color"
                        value={colors.RED}
                        label={colors.RED_LABEL}
                        checkedIcon={<ColorChecked style={{fill: colors.RED}} />}
                        uncheckedIcon={<ColorUnchecked style={{fill: colors.RED}} />}
                    />
                    <RadioButton
                        className="card-edit-color"
                        value={colors.WHITE}
                        label={colors.WHITE_LABEL}
                    />
                    <RadioButton
                        className="card-edit-color"
                        value={colors.GREEN}
                        label={colors.GREEN_LABEL}
                        checkedIcon={<ColorChecked style={{fill: colors.GREEN}} />}
                        uncheckedIcon={<ColorUnchecked style={{fill: colors.GREEN}} />}
                    />
                    <RadioButton
                        className="card-edit-color"
                        value={colors.BLUE}
                        label={colors.BLUE_LABEL}
                        checkedIcon={<ColorChecked style={{fill: colors.BLUE}} />}
                        uncheckedIcon={<ColorUnchecked style={{fill: colors.BLUE}} />}
                    />
                </RadioButtonGroup>
            </div>
        );
    }
}

export default CardEdit;
