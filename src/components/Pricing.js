/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import Image from "next/image";
import { ImArrowRight2 } from "react-icons/im";

export default function PricingSection() {
    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'primary_dark',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            marginTop: '-1.5rem',
            padding: '3.5rem 1rem 3rem 1rem',
            borderRadius: '15px',
            zIndex: '-5',
        },
        contentCard: {
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
            justifyContent: 'center',
            backgroundColor: '#FFF7E8',
            boxShadow: '0px 0px 0px 1px #fff inset',
            width: '100%',
            padding: '2rem',
            border: '1.25px solid',
            borderRadius: '15px',
            wordWrap: 'break-word',
            '& h3': {
                textAlign: 'center',
                marginBottom: '1.5rem'
            },
        },
        imageContainer: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
            width: '100%',
            opacity: '0.8',
            margin: '2rem auto',
            zIndex: '-1',
            '@media only screen and (minWidth: 550px)': {
                maxWidth: '50vw'
            }
        },
        rates: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& h4': {
                textAlign: 'center'
            }
        },
        aboutPoint: {
            display: 'flex',
            fontSize: '15px',
            '& p': {
                position: 'relative',
                bottom: '2px',
                marginLeft: '1rem'
            }
        }
    }

    return (
        <Container sx={styles.container}>
            <div style={styles.contentCard}>
                <h3>Location and Pricing</h3>
                <h5>Centre-Based Sessions – Noble Park, Melbourne</h5>
                <p>
                    Families are welcome to bring their children to our intervention location in Noble Park, VIC for individualised learning and developmental support sessions.
                </p>
                <h5>Home-Based Intervention</h5>
                <p>We also offer home visits across Melbourne&apos;s south-eastern suburbs, generally within a 30-minute driving distance from Noble Park.</p>
            </div>
            <div style={styles.imageContainer}>
                <Image src="/images/ChildrenLearning.jpg" height={2} width={3} alt="Children learning" loading="lazy" layout="responsive" sizes="(max-width: 500px), 50vw, 20vw" style={{borderRadius: "5px"}}/>
            </div>
            <div style={styles.contentCard} >
                <h3>Pricing Structure</h3>
                <p>
                    Our intervention services are offered at a competitive hourly rate, with additional travel fees for home visits. We are committed to providing high-quality support and personalised care for each child and family we work with.
                </p>
                <div style={styles.rates}>
                    <h4>Hourly rate</h4>
                    <div style={styles.aboutPoint}>
                        <p>
                            $150 / hour
                        </p>
                    </div>
                    <h4>Traveling Fee</h4>
                    <div style={styles.aboutPoint}>
                        <p>
                            $1/km from<br />Noble Park, VIC
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
