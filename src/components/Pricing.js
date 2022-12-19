/** @jsxImportSource theme-ui */
import { Container } from "theme-ui";
import Image from "next/image";

export default function PricingSection() {
    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'primary_dark',
            boxShadow: '0px 0px 0px 1px #fff inset',
            padding: '1rem',
            borderRadius: '15px',
            zIndex: '2',
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
            borderRadius: '15px',
            wordWrap: 'break-word',
            '& h3': {
                textAlign: 'center',
                marginBottom: '1.5rem'
            },
            '@media screen and (min-width: 720px)': {
                width: '70%'
            }
        },
        imageContainer: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '15px',
            width: '94%',
            opacity: '0.5',
            margin: '2rem auto',
            zIndex: '-1',
            '& img': {
                borderRadius: '15px'
            }
        },
    }

    return (
        <Container sx={styles.container}>
            <div sx={styles.contentCard}>
                <h3>Location and Pricing</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum, totam optio incidunt molestias voluptas fugiat asperiores sit magni excepturi commodi ea eius.
                    Neque, explicabo maxime!
                    Exercitationem totam doloremque ad voluptatum sint harum animi placeat delectus atque quia
                    ratione possimus dolores repellat repellendus quis nihil dicta, iste nam odio? Optio, dignissimos.
                </p>
            </div>
            <div sx={styles.imageContainer}>
                <Image src="/images/ChildrenLearning.jpg" height={300} width={350} alt="Children learning" />
            </div>
            <div sx={styles.contentCard} >
                <h3>Pricing Structure</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Possimus eligendi provident quae at aliquid est,
                    modi dolore placeat impedit ipsa fugit, perspiciatis et!
                    Nobis qui laboriosam numquam temporibus explicabo voluptate natus esse at tempora magnam,
                    reprehenderit cum unde ipsam quam eveniet quasi, rerum,
                    voluptatibus praesentium dolorum quod porro excepturi. Eos.
                </p>
                <div sx={styles.rates}>
                    <h4>Hourly rate</h4>

                </div>
            </div>
        </Container>
    )
}
