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
            backgroundColor: '#FFFDFA',
            width: '100%',
            padding: '2rem',
            border: '1.25px solid',
            borderRadius: '15px',
            wordWrap: 'break-word',
            '& h3': {
                textAlign: 'center',
                marginBottom: '1.5rem'
            },
            '@media screen and (minWidth: 720px)': {
                width: '70%'
            }
        },
        formContainer: {
            margin: '2rem 0',
            width: '100%',
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data.entries);
    }

    return (
        <Container sx={styles.container}>
            <div style={styles.contentCard}>
                <h3>Contact</h3>
                <p>
                    At La Luna, we believe every child has the potential to learn, grow, and thrive when provided with the right support, understanding, and opportunities.
                </p>
                <p>Our goal is to work closely with children and their families to build essential communication, learning, social, and independence skills, empowering each child to develop confidence and achieve their individual goals.</p>
                <p>📩 Contact La Luna today to discuss how our individualised intervention programs can support your child&apos;s learning and development.</p>
            </div>
            <div style={styles.formContainer}>
                <ContactForm handleSubmit={handleFormSubmit}/>
            </div>
        </Container>
    )
}
