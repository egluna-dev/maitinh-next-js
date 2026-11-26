/** @jsxImportSource theme-ui */
import { Container, Button, Box, Heading, Text, Link } from "theme-ui";
import { BiDownArrow } from "react-icons/bi";

export default function HeroSection() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '60vh',
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
            margin: '0 auto auto auto',
            width: '75%',
            minHeight: '55vh',
            wordWrap: 'break-word',
            '& h1': {
                padding: '1.5rem 0',
            }
        },
        p: {
            marginTop: '3rem',
            fontSize: ['1.25rem','1.5rem', null, null, '2rem'],
            fontFamily: 'body',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '1rem',
            borderRadius: '10px',
            color: 'text',
            width: '100%',
            height: 'auto',
        },
        h1: {
            margin: '3rem',
            padding: '5rem',
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
                <Text sx={styles.p}>La Luna Early Intervention Services provides individualised educational and developmental support for children aged 0 to 10 years with disabilities, developmental delays, and additional learning needs.</Text>
                <Button sx={styles.button} variant="secondary">
                    <Link 
                        activeClass="active"
                        href="#services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Learn More</Link><BiDownArrow 
                    />
                </Button>
            </Box>
        </Container>
    )
}
