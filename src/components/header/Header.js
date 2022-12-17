/** @jsxImportSource theme-ui */
import { Link } from "react-scroll";
import { Container, Flex, Button } from "theme-ui";
import Logo from "components/Logo";
import MobileDrawer from "./MobileDrawer";
import headerData from "./headerData";

export default function Header() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'space-between',
            justifyContent: 'space-around',
            width: '100%',
            margin: '0 auto',
            '@media screen and (min-width: 1080px)': {
                justifyContent: 'space-evenly',
                width: '100%'
            }
        },
        header: {
            position: 'relative',
            marginBottom: '-2rem',
            width: '100%',
            bg: 'background_dark',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            justifyContent: 'center',
            borderRadius: '15px',
            minHeight: '15vh',
            padding: '1.5rem 0',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            transition: 'all 200ms ease-in-out',
            zIndex: 1,
            '&:hover': {
                bg: 'background_light'
            }
        },
        nav: {
            display: 'none',
            flexDirection: 'row',
            width: '25%',
            fontFamily: 'body',
            fontSize: 'p',
            fontWeight: 'normal',
            color: 'text',
            '@media screen and (min-width: 906px)': {
                display: 'flex'
            }
        },
        navLink: {
            margin: '0 1rem',
            fontSize: '20px',
            whiteSpace: 'nowrap',
            transition: 'all 200ms ease-in-out',
            cursor: 'pointer',
            '&:hover': {
                color: 'primary_dark',
                textDecoration: 'underline 2px solid orange',
                textUnderlineOffset: '3px',
            }
        }
    }

    return (
        <header sx={styles.header} id="top">
            <Container sx={styles.container}>
                <Flex as="nav" sx={styles.nav}>
                    {headerData.map((item, index) => (
                        <Link
                            key={index}
                            sx={styles.navLink}
                            activeClass="active"
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Flex>
                <Logo src='/logos/Secondary_Color.svg' path="#!" height={80} width={80} alt='Mai Tinh Nguyen Logo' />
            </Container>
        </header>
    )
}
