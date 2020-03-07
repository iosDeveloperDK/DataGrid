import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  root: {},
  switchBase: {
    color: theme.palette.secondary.border,
    '&$checked': {
      color: theme.palette.secondary.main,
      '& + $track': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  },
  track: {
    backgroundColor: theme.palette.secondary.border
  },
  checked: {},
  label: {
    color: theme.palette.primary.main
  }
})

export default useStyles
