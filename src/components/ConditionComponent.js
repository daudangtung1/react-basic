import React from "react";
import ButtonShowHideComponent from "./ButtonShowHideComponent";

class ConditionComponent extends React.Component {
    state = {
        show: false
    }

    handleChildClick = feedback => {
        console.log(feedback)
        this.setState({
            show: !feedback
        })
        return feedback;
    };

    render() {
        const arr = [1, 2, 3, 4, 5];
        let show = this.state.show;
        return (
            <>
                {
                    show === false
                        ?
                        <ButtonShowHideComponent
                            text={'Show'}
                            onChildClick={this.handleChildClick}
                        >
                        </ButtonShowHideComponent>
                        :
                        <>
                            <div>
                                {
                                    arr.map((value, index) => {
                                        if (value > 3) {
                                            return (
                                                <>
                                                    <ul>
                                                        <li>{value}</li>
                                                    </ul>
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <ButtonShowHideComponent
                                text={'Hide'}
                                onChildClick={this.handleChildClick}
                            >
                            </ButtonShowHideComponent>
                        </>
                }
            </>
        )
    }
}

export default ConditionComponent;