/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";

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
            marginTop: '-1.5rem',
            padding: '3.5rem 1rem 3rem 1rem',
            borderRadius: '15px',
            zIndex: '-6',
        },
        contactForm: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0.5rem',
            width: '95%',

            '& input': {
                padding: '0.5rem',
                margin: '1rem 0',
                fontFamily: 'body',
                fontWeight: 'bold',
                border: '1px solid black',
                backgroundColor: 'light_grey',
                borderRadius: '5px',
            },
            '& textarea': {
                fontFamily: 'body',
                padding: '0.5rem',
                margin: '1rem 0',
                backgroundColor: 'light_grey',
                fontWeight: 'bold',
                borderRadius: '5px'
            },
            '& button': {
                backgroundColor: 'primary_dark',
                border: 'none',
                borderRadius: '5px',
                fontFamily: 'body',
                fontWeight: 'bold',
                height: '30px',
                width: '30%',
                margin: '0.5rem 0',
                padding: '0.25rem 0.75rem',
                transition: 'all 250ms ease-in-out',
                cursor: 'pointer'
            },
            '&button:hover': {
                backgroundColor: 'primary_light',
                cursor: 'pointer'
            }
        },
        formNames: {
            display: 'flex',
            flexDirection: 'row',
            '& input': {
                width: '100%',
                marginRight: '1.5rem'
            }
        }
    }

    return (
        <Container sx={styles.container}>
            <p>* required field</p>
            <form action="" sx={styles.contactForm}>
                <div sx={styles.formNames}>
                    <input type="text" placeholder="First name *" required />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email *" required />
                <input type="text" placeholder="Subject *" required />
                <textarea name="message" id="contact-form" placeholder="Message *" cols="30" rows="10" required></textarea>
                <button>Send</button>
            </form>
        </Container>
    )
}
