/** @jsxImportSource theme-ui */ 
import Logo from "components/Logo";
import { Container } from "theme-ui";

const Footer = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
            height: '25vh',
            width: '100%',
            bg: 'dark_grey',
            color: 'background_light'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            height: '80%',
            margin: '1rem 0'
        },
        subFooter: {
            font: 'body',
            fontSize: 'pre',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '8vh',
            width: '100%',
            bg: 'text',
            color: 'background_light'
        }
    }
  return (
    <>
        <Container sx={styles.container}>
            <main sx={styles.content}>
                <a href="">(+61) 0477 772 3076</a>
                <Logo src='/logos/White_Full.svg' height={100} width={100} alt="Mai Tinh Nguyen"/>
            </main>
            
        </Container>
        <section sx={styles.subFooter}>
            &copy; 2022 Mai Tinh. All Rights Reserved
        </section>
    </>
    
  )
}

export default Footer