import { Link as L } from "theme-ui";

const NavLink = () => {
    return (
      <div>Link</div>
    )
  }

const Link = ({ path, children, label, ...rest }) => {
  return (
    <L {...rest} href={path}>
        {children || label }
    </L>
  )
}

export {
    NavLink,
    Link
}