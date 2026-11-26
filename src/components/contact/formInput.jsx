/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import { forwardRef } from "react";

const FormInput = forwardRef(function FormInput({sx, ...props}, ref) {

    return (
        <Box as="input" ref={ref} sx={sx} {...props} />
    )
})

export default FormInput
