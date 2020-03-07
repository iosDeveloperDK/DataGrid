import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  formControl: {
    flexShrink: '0'
  },
  outlinedRoot: {
    '&:hover $notchedOutline': {
      borderColor: theme.palette.secondary.border
    },
    '&$focused $notchedOutline': {
      borderColor: theme.palette.secondary.border,
      borderWidth: 1
    }
  },
  notchedOutline: {
    borderColor: theme.palette.secondary.border
  },
  input: {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: theme.palette.text.main,
      fontWeight: '300',
      fontSize: '14px'
    },
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.text.main
  },
  focused: {}
})

export default useStyles
