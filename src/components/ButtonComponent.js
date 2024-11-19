import React from "react";

class ButtonComponent extends React.Component {
    handleSubmit = () => {
        // console.log(123456);
    }

    render() {
        let checkDisabled = this.props.disabled ?? false;
        return (
            <React.Fragment>
                <button type="button" onClick={() => this.handleSubmit()} disabled={checkDisabled}>
                    {this.props.name}
                </button>
            </React.Fragment>
        )
    }
}

export default ButtonComponent;