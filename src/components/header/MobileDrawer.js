import { useState } from "react";
import Drawer from "components/Drawer";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { ScrollBars } from "react-custom-scrollbars";
import { Link } from "react-scroll";
import { Box } from "theme-ui";
import headerData from "./headerData";

const MobileDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const styles = {
        handler: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: '0',
            width: '48px',
            fontSize: 'h1',
            cursor: 'pointer',
            color: 'text',
            transition: 'all 175ms ease-in-out',
            '&:hover': {
                color: 'dark_grey'
            },
            '@media screen and (min-width: 906px)': {
                display: 'none'
            }
        },
        drawer: {
            bg: 'primary_light',
            width: '100%',
            height: '100%'
        },
        close: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '30px',
            right: '30px',
            zIndex: '1',
        }
    }
  return (
    <Drawer
        width="320px"
        drawerHandler={
            <Box sx={styles.handler}>
                <IoMdMenu size="48px" />
            </Box>
        }
        open={isDrawerOpen}
        toggleHandler={() => setIsDrawerOpen(prevState => !prevState)}
        closeButton={<IoMdClose size="48px" color="#000000" />}
        drawerStyle={styles.drawer}
        closeBtnStyle={styles.close}
    >
        <ScrollBars>
            <Box sx={styles.content}>
                <Box sx={styles.menu}>
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
                </Box>
                <Box sx={styles.menyFooter}>
                    <Box sx={styles.social}>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Box>
                </Box>
            </Box>
        </ScrollBars>

    </Drawer>
  )
}

export default MobileDrawer