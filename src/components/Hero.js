/** @jsxImportSource theme-ui */
import { Container, Button } from "theme-ui";
import { BiDownArrow } from "react-icons/bi";

export default function HeroSection() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            backgroundImage: 'url("/images/AutismBanner3.jpg")',
            backgroundPosition: '75%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            objectFit: 'fill',
            width: '100%',
            borderRadius: '15px',
            paddingTop: '2rem',
            zIndex: 1,
        },
        button: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '2.5rem',
            width: '12rem',
            alignItems: 'center',
            marginTop: '2rem',
            fontWeight: 'bold'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
            padding: '3rem',
            wordWrap: 'break-word'
        },
        p: {
            marginTop: '1rem',
            width: '60%'
        }
    }
    return (
        <Container sx={styles.container}>
            <div sx={styles.content}>
                <h1>Early Childhood Intervention</h1>
                <h2>Language delay, ASD, and intellectual disabilities</h2>
                <p sx={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus minus, earum voluptates dignissimos hic vitae impedit asperiores incidunt accusamus.</p>
                <Button sx={styles.button} variant="secondary">Learn More <BiDownArrow /></Button>
            </div>
        </Container>
    )
}
