import React from "react";

class NumberShowComponent extends React.Component {
    state = ({
        number: '',
    })

    showNumber = (number) => {
        if (number > 9) {
            number = '9+'
        }
        return number;
    }

    render() {
        let number = this.props.number ? this.props.number : this.state.number;

        return (
            <div>
                {this.showNumber(number)}
            </div>
        )
    }
}

export default NumberShowComponent;