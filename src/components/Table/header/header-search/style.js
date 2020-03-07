import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../../config/theme";

const useStyles = makeStyles({
  show: {
    opacity: "1 !important"
  },
  searchIcon: {
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.secondary.main
    }
  },
  active: {
    color: `${theme.palette.secondary.main} !important`
  },
  searchPaper: {
    position: "absolute",
    top: "35px",
    zIndex: 3,
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.3) !important`,
    padding: "8px",
    background: "white",
    opacity: 0
  },
  searchButton: {
    flexGrow: 1,
    marginRight: "5px !important",
    color: `${theme.palette.secondary.main} !important`,
    borderColor: `${theme.palette.secondary.main} !important`
  },
  clearButton: {
    flexGrow: 1,
    marginLeft: "5px !important",
    color: `${theme.palette.secondary.clear} !important`,
    borderColor: `${theme.palette.secondary.clear} !important`
  }
});

export default useStyles;
