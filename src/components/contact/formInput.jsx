/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import { useRef } from "react";

export default function FormInput(props) {

    const {
        placeholder,
        name,
        type,
        refer,
        isRequired
    } = props

    const firstNameRef = useRef();

    return (
        <Container>
            <input type={type} name={name} placeholder={placeholder} required={isRequired} />
        </Container>
    )
}
