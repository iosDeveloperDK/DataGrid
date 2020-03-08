import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  link: {
    color: ' #99afc7',
    border: '1px solid rgba(153, 175, 199, 0.5)',
    padding: '8px',
    fontFamily: 'Roboto',
    fontWeight: 500,
    borderRadius: '4px',
    letterSpacing: ' 0.02857em',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  }
})

export default useStyles
