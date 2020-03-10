import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'

export default function TableSnackbar({ display, handleDelete }) {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setOpen(display)
  }, [display, open])

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
