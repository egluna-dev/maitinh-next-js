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
            boxShadow: '0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.2)',
            padding: '2rem 0 3rem 0',
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
            backgroundColor: 'background_light',
            width: '90%',
            height: '100%',
            padding: '2rem',
            margin: '2rem',
            border: '1.5px solid',
            borderColor: '#707070',
            borderRadius: '15px',
            wordWrap: 'break-word',
            '& h3': {
                textAlign: 'center',
                marginBottom: '1.5rem'
            },
            '@media screen and (min-width: 720px)': {
                width: '70%'
            },

        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',

            '@media screen and (min-width: 720px)': {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                alignItems: 'space-evenly',
                margin: '2rem',
                width: '93%',
            }
        }
    }

    return (
        <Container sx={styles.container} >
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
            <div sx={styles.cardContainer}>
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
