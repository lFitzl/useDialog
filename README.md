# useDialog
custom hook for drawers, modals, menu or dialogs

> type BaseUseDialog = 'form' | 'delete'

> const { showDialog, handleOpenDialog, handleCloseDialog } =
    useDialog<BaseUseDialog>(['form', 'delete'])
  
###Use:
  > keys from BaseUseDialog
  
  - handleCloseDialog('delete')
  - handleOpenDialog('form')

