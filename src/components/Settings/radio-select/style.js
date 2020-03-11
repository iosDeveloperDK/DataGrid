import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  label: {
    color: theme.palette.primary.main,
    fontWeight: `300 !important`
  },
  radio: {
    color: theme.palette.secondary.border
  }
})

export default useStyles
