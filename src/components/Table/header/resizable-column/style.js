import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../../config/theme'

const useStyles = makeStyles({
  separator: {
    width: '1px',
    height: '36px',
    background: theme.palette.secondary.border,
    cursor: 'col-resize'
  }
})

export default useStyles
