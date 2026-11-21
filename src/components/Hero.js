/** @jsxImportSource theme-ui */
import { Container, Button, Box, Heading, Text } from "theme-ui";
import { BiDownArrow } from "react-icons/bi";

export default function HeroSection() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            color: 'text',
            backgroundImage: 'url("/images/AutismBanner4.jpeg")',
            backgroundPosition: '85%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            objectFit: 'contain',
            borderRadius: '15px',
            paddingTop: '2rem',
            zIndex: '5',
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
            margin: '0 auto 2rem auto',
            width: '85%',
            wordWrap: 'break-word',
        },
        p: {
            marginTop: '1rem',
            fontSize: '1.25rem',
            fontFamily: 'body',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '1rem',
            borderRadius: '10px',
            color: 'text',
            width: '100%',
            height: 'auto',
        },
        h2: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '1rem',
            borderRadius: '10px',
            width: '100%',
            color: 'text',
        }
    }
    return (
        <Container sx={styles.container}>
            <Box sx={styles.content}>
                <Heading as="h1">Early Childhood Intervention</Heading>
                <Heading as="h2" sx={styles.h2}>Language delay, ASD, and intellectual disabilities</Heading>
                <Text sx={styles.p}>La Luna Early Intervention Services provides individualised educational and developmental support for children aged 0–10 years with disabilities, developmental delays, and additional learning needs.</Text>
                <Button sx={styles.button} variant="secondary">Learn More <BiDownArrow /></Button>
            </Box>
        </Container>
    )
}
