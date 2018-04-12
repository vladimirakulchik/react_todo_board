import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ColorChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import ColorUnchecked from 'material-ui/svg-icons/image/brightness-1';
import './CardEdit.css';

class CardEdit extends React.Component {
    RED_COLOR = "#FAC3D2";
    WHITE_COLOR = "white";
    GREEN_COLOR = "#ABF8BD";
    BLUE_COLOR = "#ABE6F8";

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
                        value={this.RED_COLOR}
                        label="Red"
                        checkedIcon={<ColorChecked style={{fill: this.RED_COLOR}} />}
                        uncheckedIcon={<ColorUnchecked style={{fill: this.RED_COLOR}} />}
                    />
                    <RadioButton
                        className="card-edit-color"
                        value={this.WHITE_COLOR}
                        label="White"
                    />
                    <RadioButton
                        className="card-edit-color"
                        value={this.GREEN_COLOR}
                        label="Green"
                        checkedIcon={<ColorChecked style={{fill: this.GREEN_COLOR}} />}
                        uncheckedIcon={<ColorUnchecked style={{fill: this.GREEN_COLOR}} />}
                    />
                    <RadioButton
                        className="card-edit-color"
                        value={this.BLUE_COLOR}
                        label="Blue"
                        checkedIcon={<ColorChecked style={{fill: this.BLUE_COLOR}} />}
                        uncheckedIcon={<ColorUnchecked style={{fill: this.BLUE_COLOR}} />}
                    />
                </RadioButtonGroup>
            </div>
        );
    }
}

export default CardEdit;
