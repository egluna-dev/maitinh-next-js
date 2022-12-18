/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import Image from "next/image";

export default function ServiceCard({ title, imageSrc, content, imgAlt }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background_light',
            boxShadow: '0px 0px 0px 1px #fff inset',
            objectFit: 'fill',
            width: '95%',
            padding: '1rem',
            border: '1px solid black',
            margin: '1rem',
            borderRadius: '15px',
        },
        contentCard: {
            position: 'relative',
            top: '0.5rem',
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
                <Image sx={styles.image} src={imageSrc} width={325} height={215} alt={imgAlt} />
                <h4 sx={{ textAlign: 'left' }}>{title}</h4>
                <p>
                    {content}
                </p>
            </div>
        </Container>
    )
}