/** @jsxImportSource theme-ui */
/* eslint-disable react/no-unknown-property */

import { Container } from "theme-ui"
import { Box, Text } from "theme-ui"
import FormInput from "./formInput"
import { useState, useEffect, useRef } from "react"
import { useForm, ValidationError } from "@formspree/react"

function getFormSpreeErrorMessage(errors) {
    if (!errors) {
        return "There was a problem submitting your message. Please try again."
    }

    if (typeof errors.getFormErrors === "function") {
        const formErrors = errors.getFormErrors()
        if (formErrors && formErrors.length > 0) {
            // console.log("This is the first error message")
            // console.log(errors.formErrors.map((err) => err.message).join(" "))
            return formErrors.map((err) => err.message).join(" ")
        }
    }

    if (Array.isArray(errors.formErrors) && errors.formErrors.length > 0) {
        // console.log("This is the second error message")
        // console.log(errors.formErrors.map((err) => err.message).join(" "))
        return errors.formErrors.map((err) => err.message).join(" ")
    }

    if (Array.isArray(errors) && errors.length >0) {
        // console.log("This is the third error message")
        // console.log(errors.map((err) => err.message).join(" "))
        return errors.map((err) => err.message).join(" ")
    }

    return "Your submission could not be verified possibly due to a spam/reCAPTCHA check. Please try again or reach out directly."
}

const TRANSITION_DURATION = 500

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
            justifyContent: 'space-between',
            margin: '0.5rem 0.5rem 0.5rem 0',
            width: '80%',
            '& input': {
                width: '45%',
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
        },
        modalBackdrop: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          },
          modalCard: {
            maxWidth: '420px',
            width: '100%',
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: 'background_dark',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          },
          modalHeading: {
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            fontFamily: 'heading',
            fontWeight: 700,
          },
          modalText: {
            display: 'block',
            marginBottom: '1.25rem',
            fontSize: '1rem',
            fontFamily: 'body',
            lineHeight: 1.5,
            color: '#333',
          },
          closeBtn: {
            padding: '0.6rem 1.25rem',
            fontFamily: 'body',
            borderRadius: '6px',
            backgroundColor: 'primary_dark',
            border: 'none',
            cursor: 'pointer',
          },
    }

    const [state, handleSubmit] = useForm('mljbgpvr')
    const [popup, setPopup] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    const openPopup = (nextPopup) => {
        setPopup(nextPopup)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsVisible(true)
            })
        })
    }

    const closePopup = () => {
        setIsVisible(false)
        window.setTimeout(() => {
            setPopup(null)
        }, TRANSITION_DURATION)
    }

    useEffect (() => {
        if (state.succeeded) {
            openPopup({
                type: "success",
                message: "Your email has been sent successfully! We will reply as soon as possible."
            })
        }
    }, [state.succeeded])

    useEffect(() => {
        if (state.errors) {
            openPopup({
                type: "error",
                message: getFormSpreeErrorMessage(state.errors)
            })
        }
    }, [state.errors])

    useEffect(() => {
        if(!popup) return

        const handleKeyDown = e => {
            if(e.key === 'Escape') {
                closePopup()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [popup])

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const payload = Object.fromEntries(formData.entries())

        setPopup(null)
        await handleSubmit({
            ...payload
        }) 
    }

    const isError = popup?.type === "error"

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
                <Box sx={{display: "none"}}>
                    <FormInput type="text" name="_gotcha" placeholder="Leave this field empty" />
                </Box>
                <Box as="textarea" name="message" id="contact-form" placeholder="Message *" cols="30" rows="10" maxLength="200" required></Box>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <Box as="button" mr={2} type="submit" disabled={state.submitting} sx={styles.submitButton}>
                    {state.submitting ? 'Sending...' : 'Submit'}
                </Box>
            </Box>
            {popup && (
                <Box
                onClick={closePopup}
                sx={{
                    ...styles.modalBackdrop,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                    transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
                    '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',
                    },
                }}
                role="dialog"
                aria-modal="true"
                aria-live="assertive"
                >
                <Box
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                        ...styles.modalCard,
                        borderTop: isError ? '4px solid #b02a37' : '4px solid #198754',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
                        transition: `opacity ${TRANSITION_DURATION}ms ease, transform ${TRANSITION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                        '@media (prefers-reduced-motion: reduce)': {
                            transition: 'none',
                            transform: 'none',
                        },
                    }}
                >
                    <Text
                    sx={{
                        ...styles.modalHeading,
                        color: isError ? 'danger' : 'success',
                    }}
                    >
                    {isError ? 'Submission Failed' : 'Message Sent'}
                    </Text>

                    <Text sx={styles.modalText}>
                        {popup.message}
                    </Text>

                    <Box
                    as="button"
                    type="button"
                    onClick={closePopup}
                    sx={styles.closeBtn}
                    >
                    {isError ? 'Try Again' : 'Close'}
                    </Box>
                </Box>
                </Box>
            )}
        </Container>
    )
}
