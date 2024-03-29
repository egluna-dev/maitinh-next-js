import { Box } from "theme-ui";
import RcDrawer from "rc-drawer";

const Drawer = ({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle,
    ...props
}) => {
  return (
    <>
        <RcDrawer
            open={open}
            onClose={toggleHandler}
            className={`drawer ${className && ''}`.trim()}
            width={width}
            placement={placement}
            level={null}
            duration={'0.4s'}
            {...props}
        >
            {closeButton && (
                <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>{closeButton}</Box>
            )}
            <Box sx={drawerStyle}>{children}</Box>
        </RcDrawer>
        <Box className="drawer__handler" style={{display: 'inline-block'}} onClick={toggleHandler}>
            {drawerHandler}
        </Box>
    </>
  )
}

Drawer.defaultProps = {
    width: "320px",
    placement: 'left'
}

export default Drawer