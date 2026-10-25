/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import { ImArrowRight2 } from "react-icons/im";
import Logo from "./Logo";
import Image from "next/image";

export default function AboutSection() {
    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background_light',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            objectFit: 'fill',
            width: '95%',
            marginTop: '-2rem',
            padding: '3rem 1rem 3rem 1rem',
            borderRadius: '15px',
            zIndex: '-2'
        },
        content: {
            position: 'relative',
            top: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
            justifyContent: 'flex-start',
            height: '90%',
            width: '100%',
            padding: '3rem',
            border: '1.5px solid',
            borderColor: '#707070',
            borderRadius: '15px',
            wordWrap: 'break-word',
        },
        row1: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
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
            height: '100%',
            '@media screen and (minWidth: 700px)': {
                textAlign: 'center',
                marginTop: '1rem'
            }
        },
        profile: {
            borderRadius: '15px',
        },
        text: {
            fontSize: 'p',
            marginTop: '2rem',
            width: '100%'
        },
        aboutPoint: {
            display: 'flex',
            fontSize: '2vw',
            '& p': {
                position: 'relative',
                bottom: '2px',
                marginLeft: '1rem'
            }
        },
        row3Right: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            
            '@media screen and (minWidth: 825px)': {
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '1rem'
            },
            row3: {
                display: 'flex',
                flexWrap: 'wrap',
            }
        },
        teacherName: {
            fontWeight: 'bold',
            fontSize: '1.75rem',
            fontFamily: 'urbanist',
        },

        teacherTitle: {
            fontSize: '1.25rem',
            fontFamily: 'urbanist',
            fontStyle: 'italic',
        },
        qualificationsList: {
            fontFamily: 'urbanist',
        }
    }
    return (
        <Container sx={styles.container}>
            <div style={styles.content}>
                <div style={styles.row1}>
                    <div style={styles.row1top}>
                        <h3>Meet Our Teacher</h3>
                        <h4 style={styles.teacherName}>Mai Tinh Nguyen</h4>
                        <h5 style={styles.teacherTitle}>Special Education & Early Intervention Teacher</h5>
                    </div>
                </div>
                <div style={styles.row3Right}>
                    <div style={styles.row2}>
                        <p style={styles.text}>
                            Mai Tinh specialises in the early intervention of children with Autism Spectrum Disorder (ASD), language delay, and intellectual disabilities such as Down Syndrome to help them develop into healthy and prosperous children.
                        </p>
                    </div>
                    <div style={styles.row3}>
                        <h4>
                            Qualifications
                        </h4>
                        <ul style={styles.qualificationsList}>
                            <li>Bachelor of Special Education</li>
                            <li>Master of Inclusive and Special Education</li>
                            <li>Graduate Diploma in Early Childhood Education</li>
                        </ul>
                    </div>
                    <div style={styles.row3}>
                        <h4>
                            Professional Experience
                        </h4>
                        <ul style={styles.qualificationsList}>
                            <li>Over 10 years of experience working in special education and early intervention, supporting children with disabilities and additional learning needs.</li>
                            <li>Extensive experience supporting children with diverse developmental profiles, learning abilities, and individual support requirements.</li>
                            <li>Languages spoken: English and Vietnamese</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <Logo src="/SVG/scroll_down.svg" sx={{ alignSelf: 'center', marginTop: '2rem' }} path="#top" height={20} width={20} alt="Back to Top" />
        </Container>
    )
}
