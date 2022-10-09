/** @jsxImportSource theme-ui */
import Image from "next/image";
import { Link } from "./Link";

const Logo = ({ src, path, height, width, alt, ...rest }) => {
  return (
    <Link path={path} sx={{cursor: 'pointer'}} {...rest}>
        <Image src={src} width={width} height={height} alt={alt}/>
    </Link>
  
  )
}

export default Logo