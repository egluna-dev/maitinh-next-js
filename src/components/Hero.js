/** @jsxImportSource theme-ui */
import { Container, Button } from "theme-ui";
import { BiDownArrow } from "react-icons/bi";

export default function HeroSection() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            color: 'text',
            backgroundImage: 'url("/images/AutismBanner3.jpg")',
            backgroundPosition: '85%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            objectFit: 'contain',
            borderRadius: '15px',
            paddingTop: '2rem',
            zIndex: '5',
            '@media screen and (minWidth: 550px)': {
                height: '75vh'
            },
            '@media screen and (minWidth: 700px)': {
                height: '80vh'
            },
            '@media screen and (minWidth: 850px)': {
                height: '85vh'
            },
            '@media screen and (minWidth: 1000px)': {
                height: '80vh',
            }
        },
        button: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '2.5rem',
            width: '12rem',
            alignItems: 'center',
            marginTop: '2rem',
            fontWeight: 'bold',

        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '85%',
            padding: '4rem',
            margin: '0rem 10%',
            wordWrap: 'break-word',
            '@media screen and (minWidth: 550px)': {
                padding: '3rem 5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                color: 'text',
            },
            '@media screen and (minWidth: 700px)': {
                padding: '3rem 8rem'
            },
            '@media screen and (minWidth: 850px)': {
                padding: '5rem 10rem'
            },
            '@media screen and (minWidth: 1200px)': {
                width: '70%',
                padding: '5rem 10rem'
            }
        },
        p: {
            marginTop: '1rem',
            fontSize: '1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '1rem',
            borderRadius: '10px',
            color: 'text',
            width: '100%',
            height: 'auto',
            '@media screen and (minWidth: 550px)': {
                color: 'red',
            }
        },
        h2: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '1rem',
            borderRadius: '10px',
            width: '100%',
            color: 'text',
            'media screen and (minWidth: 550px)': {
                color: 'red',
            }
        }
    }
    return (
        <Container sx={styles.container}>
            <div style={styles.content}>
                <h1>Early Childhood Intervention</h1>
                <h2 style={styles.h2}>Language delay, ASD, and intellectual disabilities</h2>
                <p style={styles.p}>La Luna Early Intervention Services provides individualised educational and developmental support for children aged 0–10 years with disabilities, developmental delays, and additional learning needs.</p>
                <Button sx={styles.button} variant="secondary">Learn More <BiDownArrow /></Button>
            </div>
        </Container>
    )
}
