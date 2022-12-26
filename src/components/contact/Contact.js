/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background_dark',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            marginTop: '-1.5rem',
            padding: '3.5rem 1rem 3rem 1rem',
            borderRadius: '15px',
            zIndex: '0',
        },
        contentCard: {
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
            justifyContent: 'center',
            backgroundColor: 'background_light',
            width: '95%',
            padding: '2rem',
            border: '1.25px solid',
            borderRadius: '15px',
            wordWrap: 'break-word',
            '& h3': {
                textAlign: 'center',
                marginBottom: '1.5rem'
            },
            '@media screen and (min-width: 720px)': {
                width: '70%'
            }
        },
        formContainer: {
            margin: '3rem 0',
            width: '95%',
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data.entries);
    }

    return (
        <Container sx={styles.container}>
            <div sx={styles.contentCard}>
                <h3>Contact</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum, totam optio incidunt molestias voluptas fugiat asperiores sit magni excepturi commodi ea eius.
                    Neque, explicabo maxime!
                    Exercitationem totam doloremque ad voluptatum sint harum animi placeat delectus atque quia
                    ratione possimus dolores repellat repellendus quis nihil dicta, iste nam odio? Optio, dignissimos.
                </p>
            </div>
            <div sx={styles.formContainer}>
                <ContactForm handleSubmit={handleFormSubmit}/>
            </div>
        </Container>
    )
}
