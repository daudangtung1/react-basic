import React from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

class FormComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arr: []
    }

    handleChildValue = feedback => {
        console.log(feedback);
    }

    handleButtonState = () => {

    }

    render() {
        let inputKey = [
            {
                placeholder: "First name",
                name: 'firstName',
                id: 'firstName',
                label: 'First name',
                type: 'text'
            },
            {
                placeholder: "Last Name",
                name: 'lastName',
                id: 'lastName',
                label: 'Last name',
                type: 'text'
            },
            {
                placeholder: "Password",
                name: 'password',
                id: 'password',
                label: 'Password',
                type: 'password'
            }
        ]

        return (
            <>
                <form>
                    {
                        inputKey.map((value, index) => (
                            <InputComponent
                                placeholder={value.placeholder}
                                name={value.name}
                                id={value.id}
                                label={value.label}
                                type={value.type}
                                key={index}
                                returnValue={this.handleChildValue}
                            ></InputComponent>
                        ))
                    }
                    <ButtonComponent name={'Submit'}></ButtonComponent>
                </form>
            </>
        )
    }
}

export default FormComponent;