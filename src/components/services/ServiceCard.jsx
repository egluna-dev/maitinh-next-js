/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import Image from "next/image";

export default function ServiceCard({ title, imageSrc, content, imgAlt }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'background_light',
            boxShadow: '0px 0px 0px 1px #fff inset',
            width: '80%',
            height: '80%',
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
            padding: '2.5rem',
            wordWrap: 'break-word',

            '& h4': {
                textAlign: 'left',
                margin: '5rem 0'
            }
        },
        image: {
            border: '1px solid black',
            borderRadius: '5px',
            margin: '1rem 0',
            width: '100%',
            boxShadow: '0px 0px 0px 1px #fff inset',
            backgroundColor: 'transparent',
            opacity: '0.65',
        }
    }
    return (
        <Container sx={styles.container}>
            <div style={styles.contentCard}>
                <div style={styles.image}>
                    <Image src={imageSrc} width={80} height={50} alt={imgAlt} loading="lazy" layout="responsive" sizes="(max-width: 768px), 100vw, 33vw"/>
                </div>
                <h4 >{title}</h4>
                <p>
                    {content}
                </p>
            </div>
        </Container>
    )
}
