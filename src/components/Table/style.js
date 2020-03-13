import { makeStyles } from '@material-ui/core/styles'
import theme from '../../config/theme'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    top: 0,
    color: `${theme.palette.primary.main}`,
    '& div p': {
      fontSize: '11px'
    },
    userSelect: 'none'
  },
  column: {
    display: 'flex',
    height: '56px',
    borderBottom: `1px solid ${theme.palette.primary.main}40`,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    background: '#fff'
  },
  checkbox: {
    width: '60px'
  },
  icon: {
    color: theme.palette.primary.main,
    '& svg': {
      color: 'inherit'
    }
  },
  title: {
    '&:hover': {
      cursor: 'pointer',
      color: `${theme.palette.primary.main}90`
    },
    '&:hover svg': {
      opacity: 0.5
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
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  rowAvatar: {
    height: '30px !important',
    width: '30px !important'
  },
  rowValue: {
    display: 'flex',
    color: theme.palette.text.main,
    justifyContent: 'flex-start',
    padding: theme.spacing(0.5, 1),
    background: '#fff',
    flexShrink: 0,
    '& p': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '14px',
      fontWeight: 300
    },
    '&.avatar': {
      width: '70px'
    },
    '&.name': {
      padding: '0 10px',
      width: '176px'
    },
    '&.car': {
      width: '150px'
    },
    '&.type': {
      width: '150px'
    },
    '&.price': {
      width: '100px',
      color: theme.palette.secondary.complete
    },
    '&.online': {
      width: '56px',
      paddingLeft: '12px',
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
    '&.date': {
      width: '150px'
    },
    '&.minus': {
      color: theme.palette.secondary.clear
    },
    '&.text': {
      width: '536px'
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
