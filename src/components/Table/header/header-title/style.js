import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../../config/theme'

const useStyles = makeStyles({
  checkbox: {
    width: '60px'
  },
  hover: {
    '&:hover': {
      cursor: 'pointer',
      color: `${theme.palette.primary.main}90`
    },
    '&:hover svg': {
      opacity: 0.5
    }
  },
  icon: {
    color: theme.palette.primary.main,
    '& svg': {
      color: theme.palette.primary.main
    }
  },
  iconSelected: {
    color: theme.palette.secondary.main,
    '& svg': {
      color: theme.palette.secondary.main
    }
  },
  sortIcon: {
    marginLeft: theme.spacing(0.5),
    marginTop: '-2px',
    height: '16px !important',
    width: 'auto !important',
    color: theme.palette.secondary.main,
    opacity: 1
  },
  sortHiddenIcon: {
    opacity: 0
  }
})

export default useStyles
