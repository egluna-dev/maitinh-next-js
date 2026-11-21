/** @jsxImportSource theme-ui */
import Logo from "components/Logo";
import { Container, Box } from "theme-ui";

const now = new Date()
const currentYear = now.getFullYear()

const Footer = () => {
    const styles = {
        container: {
            position: 'relative',
            marginTop: '-1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
            justifyContent: 'center',
            marginBottom: '-2rem',
            alignItems: 'center',
            width: '100%',
            bg: 'dark_grey',
            padding: '3rem 2rem',
            borderRadius: '15px',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            zIndex: '-7',
            color: 'background_light',
            '@media screen and (min-width: 720px)': {
                minHeight: '30vh'
            }
        },
        content: {
            fontFamily: 'body',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignContent: 'space-evenly',
            alignItems: 'center',
            width: '95%',
        },
        subFooter: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            borderRadius: '15px',
            fontFamily: 'body',
            fontSize: 'pre',
            overflowWrap: 'anywhere',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: '8vh',
            zIndex: '-8',
            paddingTop: '2rem',
        },
        footerLink: {
            fontSize: 'p',
            margin: '0.5rem 0',
            transition: 'all 175ms ease-in-out',
            '&:hover': {
                color: 'primary_dark',
            }
        }
    }
    return (
        <>
            <Container sx={styles.container}>
                <Box as="div" sx={styles.content}>
                    <Box as="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <a href="tel:0477555555" style={styles.footerLink}>Phone</a>
                        <a href="mailto:email@test.com" style={styles.footerLink}>Email</a>
                    </Box>
                    <Logo src='/logos/LaLuna_Logo_Full_White.svg' sx={styles.footerLink} path="#top" height={125} width={125} alt="Mai Tinh Nguyen" />
                    <Logo src="/SVG/to_top.svg" sx={styles.footerLink} path="#top" height={75} width={75} alt="Back to Top" />
                </Box>

            </Container>
            <Box as="div" sx={styles.subFooter}>
                &copy; {currentYear} LaLuna Early Intervention Services. All Rights Reserved.
            </Box>
        </>

    )
}

export default Footer