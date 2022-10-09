/** @jsxImportSource theme-ui */
import Image from "next/image";

const Logo = ({ src, height, width, alt }) => {
    const styles = {
        logo: {
            color: 'success'
        }
    }
  return <Image src={src} width={width} height={height} alt={alt}/>
}

export default Logo