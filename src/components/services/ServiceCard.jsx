/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text } from "theme-ui";
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
            width: '100%',
            height: 'auto',
            border: '1px solid black',
            margin: '1rem auto',
            borderRadius: '15px',
        },
        contentCard: {
            // position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'space-evenly',
            backgroundColor: 'background_light',
            padding: '3.5rem',
            wordWrap: 'break-word',
            paddingBottom: 'auto',
        },
        image: {
            border: '1.5px solid black',
            borderRadius: '0.5rem',
            boxShadow: '0px 0px 0px 1px #fff inset',
            marginBottom: '1rem',
            opacity: '0.7',
        }
    }
    return (
        <Container sx={styles.container}>
            <Box as="div" sx={styles.contentCard}>
                <Box as="div" sx={styles.image}>
                    <Image src={imageSrc} width={300} height={200} alt={imgAlt} loading="lazy" layout="responsive" sizes="(max-width: 768px), 100vw, 33vw"/>
                </Box>
                <Heading as="h4" >{title}</Heading>
                <Text as="p">
                    {content}
                </Text>
            </Box>
        </Container>
    )
}
