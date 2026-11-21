/** @jsxImportSource theme-ui */
/* eslint-disable react/no-unknown-property */

import { Container, css } from "theme-ui";
import { Box, Text } from "theme-ui";
import FormInput from "./formInput";
import { useRef, useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background_light',
            boxShadow: '3px 3px 9px 2px rgba(2, 6, 4, 0.1)',
            border: '1px solid black',
            padding: '3.5rem 1rem 3rem 1rem',
            borderRadius: '15px',
            zIndex: '7'
        },
        contactForm: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0.5rem',
            width: '100%',
            zIndex: '3',

            '& input': {
                padding: '0.5rem',
                margin: '0.5rem 0',
                fontFamily: 'body',
                fontWeight: 'normal',
                border: '1px solid',
                width: '80%',
                backgroundColor: 'light_grey',
                borderRadius: '8px',
            },
            '& textarea': {
                fontFamily: 'body',
                padding: '0.5rem',
                margin: '1rem 0',
                fontWeight: 'normal',
                borderRadius: '8px',
                resize: 'vertical',
                maxHeight: '250px',
                minHeight: '100px',
            },
            '&button::hover': {
                backgroundColor: 'red',
                cursor: 'pointer',
            }
        },
        formNames: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            margin: '0.5rem 0',
            width: '90%',
            '& input': {
                fontFamily: 'Urbanist',
                width: '90%',
            }
        },
        submitButton: {
            backgroundColor: 'primary_light',
            border: 'none',
            borderRadius: '5px',
            fontFamily: 'body',
            height: '30px',
            width: '30%',
            margin: '0.5rem 0',
            padding: '0.25rem 0.75rem',
            transition: 'all 250ms ease-in-out',
            cursor: 'pointer'
        }
    }

    const [status, setStatus] = useState("")
    const [state, handleSubmit] = useForm('mljbgpvr')
    const [showPopup, setShowPopup] = useState(false)

    useEffect (() => {
        if (state.succeeded) {
            setShowPopup(true)
        }
    }, [state.succeeded])

    const handleFormSubmit = async (e) => {
        await handleSubmit(e)
    }

    return (
        <Container sx={styles.container}>
            <Box as="form" onSubmit={handleFormSubmit} sx={styles.contactForm}>
                <p>* required field</p>
                <Box sx={styles.formNames}>
                    <FormInput type="text" name="firstName" placeholder="First name *" required />
                    <FormInput type="text" name="lastName" placeholder="Last name" />
                </Box>
                <FormInput type="email" name="email" placeholder="Email *" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <FormInput type="text" name="subject" placeholder="Subject *" required />
                <Box as="textarea" name="message" id="contact-form" placeholder="Message *" cols="30" rows="10" maxLength="200" required></Box>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <Box as="button" mr={2} type="submit" disabled={state.submitting} sx={styles.submitButton}>
                    {state.submitting ? 'Sending...' : 'Submit'}
                </Box>

                {state.errors && state.errors.length > 0 && (
                    <Box sx={styles.errorBanner} >
                        <Text >
                            There was a problem sending your message. Please check your details and try again.
                        </Text>
                    </Box>
                )}
            </Box>
            {showPopup && (
                <Box sx={styles.modalBackdrop} role="dialog" aria-modal="true">
                    <Box sx={styles.modalCard}>
                        <Text sx={styles.modalText}>
                            Your email has been sent successfully! We will reply as soon as possible.
                        </Text>
                        <Box as="button" type="button" onClick={() => setShowPopup(false)} sx={styles.closeBtn}>
                            Close
                        </Box>
                    </Box>
                </Box>
            )}
        </Container>
    )
}
