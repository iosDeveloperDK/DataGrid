import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '1580px',
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
    padding: theme.spacing(0, 1)
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
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  rowSelected: {
    background: '#f5f8fb',
    boxShadow: `0px 0px 10px 0px rgba(157,153,214,0.2)`,
    '& div': {
      background: '#f5f8fb !important'
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
      color: '#46d3ce'
    },
    '&.online': {
      paddingLeft: '16px',
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
    '&.minus': {
      color: '#ff619d'
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
