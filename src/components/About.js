/** @jsxImportSource theme-ui */ 
import { Container, Button } from "theme-ui";
import Image from "next/image";

export default function AboutSection() {
    const styles = {
        container: {
            position: 'relative',
            marginTop: '-2rem',
            backgroundColor: 'background_light',
            backgroundPosition: '75%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0px 0px 0px 1px #fff inset',
            objectFit: 'fill',
            width: '100%',
            height: '95vh',
            borderRadius: '15px',
            paddingTop: '2rem',
            zIndex: -1,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
            justifyContent: 'flex-start',
            height: '100%',
            width: '100%',
            padding: '3rem',
            outline: '1px solid black',
            outlineOffset: '-15px',
            outlineRadius: '15px',
            wordWrap: 'break-word'
        },
        row1: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        row2: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        row1top: {
            marginLeft: '2rem',
            height: '100%'
        },
        profile: {
            borderRadius: '15px',
        },
        text: {
            fontSize: 'p',
            marginTop: '2rem',
        }
    }
    return (
        <Container sx={styles.container}>
            <div sx={styles.content}>
                <div sx={styles.row1}>
                    <Image sx={styles.profile} src="/images/profilephoto.jpg" width={250} height={350} alt="Mai Tinh Nguyen" />
                    <div sx={styles.row1top}>
                        <h2>Mai Tinh Nguyen</h2>
                        <h4>Early Intervention Specialist</h4>
                    </div>
                    
                </div>
                <div sx={styles.row2}>
                    <p sx={styles.text}>
                        Hi, I am Mai Tinh and I specialize in the early intervention of children with Autism Spectrum Disorder (ASD), language delay, and intellectual disabilities such as Down Syndrome to help them develop into healthy and prosperous children.
                        Hamburger ribeye sirloin tenderloin capicola chicken, chuck ham hock swine picanha. Corned beef meatball bresaola strip steak.
                    </p>
                </div>
                
            </div>
            
        </Container>
    )
}
