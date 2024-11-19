import React from "react";

class InputComponent extends React.Component {
    state = {
        id: this.props.id,
        label: this.props.label,
        name: this.props.name,
        placeholder: '',
        type: this.props.type,
        value: ''
    }

    changeEvent = (e) => {
        this.props.returnValue(
            {
                key: this.props.name,
                value: e.target.value
            }
        )
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <label htmlFor={this.state.id}>{this.state.label}</label>&nbsp;
                <input type={this.state.type} placeholder={this.props.placeholder} onChange={e => this.changeEvent(e)} value={this.state.value} name={this.state.name} />
            </div>
        )
    }
}

export default InputComponent;