/** @jsxImportSource theme-ui */
import Image from "next/image";
import { Link } from "./Link";

const Logo = ({ src, height, width, alt, ...rest }) => {
  return (
    <Link path="/" sx={{variant: 'links.logo', display: 'flex', cursor: 'pointer', mr: 15}} {...rest}>
        <Image src={src} width={width} height={height} alt={alt}/>
    </Link>
  
  )
}

export default Logo