/** @jsxImportSource theme-ui */
import { Box, Container } from "theme-ui";
import ServiceCard from "./ServiceCard";
import servicesData from "./servicesData";

export default function ServicesSection() {
    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background_dark',
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            borderRadius: '15px',
            marginTop: '-1rem',
            padding: '2rem 1rem 3rem 1rem',
            zIndex: '-4',
        },
        contentCard: {
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
            justifyContent: 'center',
            backgroundColor: '#FFFDFA',
            width: '100%',
            maxHeight: '80%',
            padding: '2rem',
            margin: '2rem',
            border: '1.5px solid',
            borderColor: '#707070',
            borderRadius: '15px',
            wordWrap: 'break-word',
        },
        cardContainer: {
        display: 'grid',
        // Mobile: 1 column. Desktop (768px+): 2 columns.
        gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
        gap: '2rem', // Replaces margins on the cards
        justifyContent: 'center',
        alignItems: 'stretch', // Forces both cards to be the exact same height
        textAlign: 'center',
    },
    }

    return (
        <Container sx={styles.container} >
            <Box sx={styles.contentCard}>
                <h3>Our Intervention Programs</h3>
                <p>
                    At La Luna, we recognise that every child is unique, with their own strengths, abilities, and developmental needs. We provide individualised intervention programs tailored to each child&apos;s developmental stage, learning abilities, and personal goals.
                </p>
                <p>Our services primarily focus on one-on-one (1:1) intervention sessions, allowing each child to learn at their own pace in a positive, encouraging, and supportive environment.</p>
                {/* <p>
                    At La Luna, we believe every child has the potential to learn, grow, and thrive when provided with the right support, understanding, and opportunities.
                </p> */}
                <p>Our goal is to work closely with children and their families to build essential communication, learning, social, and independence skills, empowering each child to develop confidence and achieve their individual goals.</p>
                <p>We welcome children with or without NDIS funding, including children experiencing:</p>
            </Box>
            <Box sx={styles.cardContainer}>
                {servicesData.map((item, index) => (
                    <ServiceCard
                        key={index}
                        title={item.title}
                        imageSrc={item.imageSrc}
                        content={item.content}
                        imgAlt={item.imgAlt}
                    />
                ))}
            </Box>
        </Container >
    )
}
