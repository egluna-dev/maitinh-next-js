/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
import servicesData from "./servicesData";

export default function ServicesSection() {
    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background_dark',
            boxShadow: '0px 0px 0px 1px #fff inset',
            padding: '1rem',
            borderRadius: '15px',
            zIndex: -2,
        },
        contentCard: {
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
            justifyContent: 'center',
            backgroundColor: 'background_light',
            boxShadow: '0px 0px 0px 1px #fff inset',
            width: '95%',
            padding: '2rem',
            border: '1.5px solid',
            borderColor: '#707070',
            borderRadius: '15px',
            wordWrap: 'break-word',
            '& h3': {
                textAlign: 'center',
                marginBottom: '1.5rem'
            }
        },
    }
    return (
        <Container sx={styles.container}>
            <div sx={styles.contentCard}>
                <h3>Services and Support</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum, totam optio incidunt molestias voluptas fugiat asperiores sit magni excepturi commodi ea eius.
                    Neque, explicabo maxime!
                    Exercitationem totam doloremque ad voluptatum sint harum animi placeat delectus atque quia
                    ratione possimus dolores repellat repellendus quis nihil dicta, iste nam odio? Optio, dignissimos.
                </p>
            </div>
            {servicesData.map((item, index) => (
                <ServiceCard
                    key={index}
                    title={item.title}
                    imageSrc={item.imageSrc}
                    content={item.content}
                    imgAlt={item.imgAlt}
                />
            ))}
        </Container>
    )
}