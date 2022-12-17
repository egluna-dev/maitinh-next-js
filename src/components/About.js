/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import { RiArrowRightSFill } from "react-icons/ri";
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
            backgroundPosition: '75%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0px 0px 0px 1px #fff inset',
            objectFit: 'fill',
            width: '95%',
            padding: '1rem',
            borderRadius: '15px',
            zIndex: -1,
        },
        content: {
            position: 'relative',
            top: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
            justifyContent: 'flex-start',
            boxShadow: '0px 0px 0px 1px #fff inset',
            height: '100%',
            width: '100%',
            padding: '3rem',
            border: '1.5px solid',
            borderColor: '#707070',
            borderRadius: '15px',
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
            width: '100%'
        },
        aboutPoint: {
            display: 'flex',
            fontSize: '18px',
            '& p': {
                position: 'relative',
                bottom: '2px',
                marginLeft: '1rem'
            }
        }
    }
    return (
        <Container sx={styles.container}>
            <div sx={styles.content}>
                <div sx={styles.row1}>
                    <Image sx={styles.profile} src="/images/profilephoto.jpg" width={275} height={375} alt="Mai Tinh Nguyen" />
                    <div sx={styles.row1top}>
                        <h3>Mai Tinh Nguyen</h3>
                        <h4>Early Intervention Specialist</h4>
                    </div>

                </div>
                <div sx={styles.row2}>
                    <p sx={styles.text}>
                        Hi, I am Mai Tinh and I specialize in the early intervention of children with Autism Spectrum Disorder (ASD), language delay, and intellectual disabilities such as Down Syndrome to help them develop into healthy and prosperous children.
                        Hamburger ribeye sirloin tenderloin capicola chicken, chuck ham hock swine picanha. Corned beef meatball bresaola strip steak.
                    </p>
                </div>

                <div sx={styles.row3}>
                    <h3>
                        About Myself
                    </h3>
                    <div sx={styles.aboutPoint}>
                        <RiArrowRightSFill />
                        <p>
                            Bachelor of Special Education,
                            Ho Chi Minh City School of Education 2010
                        </p>
                    </div>
                    <div sx={styles.aboutPoint}>
                        <RiArrowRightSFill />
                        <p>
                            Master&apos;s Degree,
                            Inclusive and Special Education,
                            Monash University, Melbourne 2017
                        </p>
                    </div>
                    <div sx={styles.aboutPoint}>
                        <RiArrowRightSFill />
                        <p>
                            Fluent in Vietnamese and English.
                        </p>
                    </div>
                </div>

            </div>
            <Logo src="/SVG/scroll_down.svg" sx={{ alignSelf: 'center', marginTop: '2rem' }} path="#top" height={20} width={20} alt="Back to Top" />
        </Container>
    )
}
