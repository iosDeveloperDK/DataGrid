import { makeStyles } from '@material-ui/core/styles'
import theme from '../../config/theme'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '1580px',
    height: '56px',
    top: 0,
    // width: '1184px',
    color: `${theme.palette.primary.main}`,
    borderBottom: `1px solid ${theme.palette.primary.main}40`,

    '& div p': {
      fontSize: '11px'
    },
    userSelect: 'none'
  },
  column: {
    display: 'flex',
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
    '&.checkbox': {
      // width: '60px'
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
      color: '#46d3ce'
    },
    '&.online': {
      width: '56px',
      paddingLeft: '12px',
      '& span': {
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        '&.online': {
          background: '#46d3ce'
        },
        '&.offline': {
          background: '#ff619d'
        }
      }
    },
    '&.date': {
      width: '150px'
    },
    '&.minus': {
      color: '#ff619d'
    },
    '&.text': {
      width: '536px'
    }
    // color: '#81a4fb'
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
