import theme from '../../../config/theme'

export default () => ({
  control: (base, state) => {
    return {
      ...base,
      height: '40px',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0.5),
      boxShadow: 'none',
      borderColor: theme.palette.secondary.border,
      '&:hover': { borderColor: theme.palette.secondary.border }
    }
  },
  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      textOverflow: 'ellipsis !important',
      color: theme.palette.text.main,
      opacity: '0.5',
      fontWeight: '300',
      fontSize: '14px',
      fontFamily: 'Roboto'
    }
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: isSelected ? '#fff' : theme.palette.text.main,
      background: isSelected ? theme.palette.text.main : '#fff',
      fontWeight: '300',
      fontSize: '14px',
      fontFamily: 'Roboto'
    }
  },
  multiValue: styles => {
    return {
      ...styles,
      backgroundColor: theme.palette.secondary.main
    }
  },
  multiValueLabel: styles => ({
    ...styles,
    color: '#fff',
    fontWeight: '300',
    fontSize: '14px',
    fontFamily: 'Roboto'
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: '#fff',
    ':hover': {
      backgroundColor: theme.palette.secondary.main,
      color: 'white'
    }
  }),
  singleValue: (provided, state) => {
    const color = theme.palette.text.main
    const fontSize = 16
    const fontWeight = 400

    return { ...provided, color, fontSize, fontWeight, fontFamily: 'Roboto' }
  }
})
