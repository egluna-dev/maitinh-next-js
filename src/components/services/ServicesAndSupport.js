/** @jsxImportSource theme-ui */
import { CloseIcon, Container } from "theme-ui";
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
            height: '100%',
            padding: '2rem',
            margin: '2rem',
            border: '1.5px solid',
            borderColor: '#707070',
            borderRadius: '15px',
            wordWrap: 'break-word',
        },
        cardContainer: {
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto',
            justifyContent: 'space-evenly',
            alignItems: 'space-evenly',
            alignContent: 'space-evenly',
            textAlign: 'center',
        },
    }

    return (
        <Container sx={styles.container} >
            <div style={styles.contentCard}>
                <h3>Our Intervention Programs</h3>
                <p>
                    At La Luna, we recognise that every child is unique, with their own strengths, abilities, and developmental needs. We provide individualised, child-centred intervention programs tailored to each child&apos;s developmental stage, learning abilities, and personal goals.
                </p>
                <p>Our services primarily focus on one-on-one (1:1) intervention sessions, allowing each child to learn at their own pace in a positive, encouraging, and supportive environment.</p>
                <p>We welcome children with or without NDIS funding, including children experiencing:</p>
            </div>
            <div style={styles.cardContainer}>
                {servicesData.map((item, index) => (
                    <ServiceCard
                        key={index}
                        title={item.title}
                        imageSrc={item.imageSrc}
                        content={item.content}
                        imgAlt={item.imgAlt}
                    />
                ))}
            </div>
        </Container >
    )
}
