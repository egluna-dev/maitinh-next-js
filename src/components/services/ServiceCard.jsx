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
            borderRadius: '15px',
            border: '2px solid black',
            marginBottom: '1.25rem',
            padding: '1rem'
        }
    }
    return (
        <Container sx={styles.container}>
            <div sx={styles.contentCard}>
                <Image sx={styles.image} src={imageSrc} width={525} height={400} alt={imgAlt} />
                <h4 sx={{ textAlign: 'left' }}>{title}</h4>
                <p>
                    {content}
                </p>
            </div>
        </Container>
    )
}
