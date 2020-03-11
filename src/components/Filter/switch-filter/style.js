import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  root: {},
  switchBase: {
    color: `${theme.palette.secondary.border} !important`,
    '&$checked': {
      color: `${theme.palette.secondary.main} !important`,
      '& + $track': {
        backgroundColor: `${theme.palette.secondary.main} !important`
      }
    }
  },
  track: {
    backgroundColor: `${theme.palette.secondary.border} !important`
  },
  checked: {},
  label: {
    fontWeight: '300 !important',
    color: `${theme.palette.primary.main} !important`
  }
})

export default useStyles
