/** @jsxImportSource theme-ui */ 
import Logo from "components/Logo";
import { Container } from "theme-ui";

const Footer = () => {
    const styles = {
        container: {
            position: 'relative',
            marginTop: '-2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
            width: '100%',
            bg: 'dark_grey',
            borderRadius: '15px',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            zIndex: -1,
            color: 'background_light',
            '@media screen and (min-width: 720px)': {
                height: '30vh'
            }
        },
        content: {
            fontFamily: 'body',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignContent: 'space-evenly',
            alignItems: 'center',
            width:'90%',
            height: '90%',
            '@media screen and (min-width: 720px)': {
                flexDirection: 'row'
            }
        },
        subFooter: {
            position: 'relative',
            marginTop: '-2rem',
            paddingTop: '2rem',
            borderRadius: '15px',
            fontFamily: 'body',
            fontSize: 'pre',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            width: '100%',
            bg: 'text',
            zIndex: -2,
            color: 'background_light'
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
            <main sx={styles.content}>
                <div sx={{display: 'flex', flexDirection: 'column'}}>
                    <a href="tel:0477555555" sx={styles.footerLink}>Phone</a>
                    <a href="mailto:email@test.com" sx={styles.footerLink}>Email</a>
                </div>
                <Logo src='/logos/White_Full.svg' sx={styles.footerLink} path="#top" height={125} width={125} alt="Mai Tinh Nguyen"/>
                <Logo src="/SVG/to_top.svg" sx={styles.footerLink} path="#top" height={75} width={75} alt="Back to Top" />
            </main>
            
        </Container>
        <section sx={styles.subFooter}>
            &copy; 2022 Mai Tinh. All Rights Reserved
        </section>
    </>
    
  )
}

export default Footer