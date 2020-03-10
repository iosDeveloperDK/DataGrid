import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  checkbox: {
    width: '60px'
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
  row: {
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  rowSelected: {
    background: theme.palette.secondary.select,
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`,
    '& div': {
      background: `${theme.palette.secondary.select} !important`
    }
  },
  rowAvatar: {
    height: '30px !important',
    width: '30px !important'
  },
  rowValue: {
    background: '#fff',
    display: 'flex',
    color: theme.palette.text.main,
    justifyContent: 'flex-start',
    padding: theme.spacing(0.5, 1),
    flexShrink: 0,
    '& p': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '14px',
      fontWeight: 300
    },
    '&.name': {
      padding: '0 10px'
    },
    '&.price': {
      width: '100px',
      color: theme.palette.secondary.complete
    },
    '&.online': {
      paddingLeft: '16px',
      '& span': {
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        '&.online': {
          background: theme.palette.secondary.complete
        },
        '&.offline': {
          background: theme.palette.secondary.clear
        }
      }
    },
    '&.minus': {
      color: theme.palette.secondary.clear
    }
  },
  rowText: {
    flexShrink: 10,
    '& p': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '14px',
      fontWeight: 300
    }
  }
})

export default useStyles
