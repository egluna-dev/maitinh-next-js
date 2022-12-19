/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import Image from "next/image";

export default function ServiceCard({ title, imageSrc, content, imgAlt }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'background_light',
            boxShadow: '0px 0px 0px 1px #fff inset',
            objectFit: 'fill',
            width: '90%',
            height: '100%',
            padding: '1rem',
            border: '1px solid black',
            margin: '1rem auto',
            borderRadius: '15px',
            '@media screen and (min-width: 720px)': {
                margin: '1.5rem',
                width: '70%',
            },
        },
        contentCard: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'background_light',
            boxShadow: '0px 0px 0px 1px #fff inset',
            padding: '2rem',
            wordWrap: 'break-word',

            '& h4': {
                textAlign: 'left',
                margin: '1.25rem 0'
            }
        },
        image: {
            border: '1px solid black',
            borderRadius: '15px',
            boxShadow: '0px 0px 0px 1px #fff inset',
            backgroundColor: 'transparent',
            '& img': {
                borderRadius: '15px',
                height: '100%'
            }
        }
    }
    return (
        <Container sx={styles.container}>
            <div sx={styles.contentCard}>
                <div sx={styles.image}>
                    <Image src={imageSrc} width={550} height={425} alt={imgAlt} />
                </div>
                <h4 >{title}</h4>
                <p>
                    {content}
                </p>
            </div>
        </Container>
    )
}
