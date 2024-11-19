import React from "react";

class ButtonShowHideComponent extends React.Component {
    state = {
        show: true,
        text: 'Show'
    }

    handleShowHide = () => {
        this.props.onChildClick(this.state.show)
        this.setState({
            show: !this.state.show,
            text: this.props.text
        })
    }

    render() {
        return (
            <>
                <div>
                    <button type="button" onClick={() => this.handleShowHide()}>
                        {this.state.text}
                    </button>
                </div>
            </>
        )
    }
}

export default ButtonShowHideComponent;