import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import {Menu} from "@material-ui/icons";

const useStyles = makeStyles({
    header: {
        background: "#fff",
        height: "70px",
    },
    logo: {
        height: 55,
        margin: "auto",
        // paddingRight: 70,
    },
    menu: {
        color: "#000"
    }
})

const Header = () => {

    const classes = useStyles();
    const url = "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Menu className={classes.menu}></Menu>
                <img src={url} alt="" className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;