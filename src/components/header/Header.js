/** @jsxImportSource theme-ui */ 
import { Link } from "react-scroll";
import { Container, Flex, Button } from "theme-ui";
import Logo from "components/Logo";
import headerData from "./headerData";

export default function Header() {
    const styles = {
        header: {
            zIndex: '1',
            color: 'text',
            height: '25vh',
            width: '100%',
            bg: 'background_dark',
            fontWeight: 'bold',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            py: 4,
            '&:hover': {
                bg: 'background_light'
            }
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: '15rem',
            width: '100%',
            backgroundColor: 'background-light',
            margin: '0 auto'
        },
        nav: {
            display: 'flex',
            flexDirection: 'row',
            width: '25%',
            fontFamily: 'body',
            fontSize: 'h4',
            fontWeight: 'normal',
            color: 'text'
        }
    }
    
    return (
        <header sx={styles.header}>
            <Container sx={styles.container}>
                <Flex as="nav" sx={styles.nav}>
                    {headerData.map((item, index) => (
                        <Link 
                            key={index} 
                            sx={styles.nav} 
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
                <Logo src='/logos/Secondary_Color.svg' height={100} width={100} alt='Mai Tinh Nguyen Logo'/>
            </Container>
        </header>
    )
}
