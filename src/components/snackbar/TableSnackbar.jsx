import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

export default function TableSnackbar({ display, handleDelete }) {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setOpen(display)
  }, [display])

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={open}
        onClose={() => setOpen(false)}
        onExited={() => setOpen(false)}
        message={'Delete selected rows'}
        action={
          <React.Fragment>
            <Button
              color="secondary"
              size="small"
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
          </React.Fragment>
        }
      />
    </div>
  )
}
