import { useState } from 'react'

export const useDialog = <T extends string>(uses: T[]) => {
  const [showDialog, setshowDialog] = useState<Record<T, boolean>>(() => {
    let initialValues = {}
    uses.forEach((e) => {
      initialValues = {
        ...initialValues,
        [e]: false,
      }
    })
    return initialValues as Record<T, boolean>
  })

  const handleOpenDialog = (e: T) => {
    setshowDialog((prev) => ({
      ...prev,
      [e]: true,
    }))
  }

  const handleCloseDialog = (e: T) => {
    setshowDialog((prev) => ({
      ...prev,
      [e]: false,
    }))
  }

  return {
    showDialog,
    handleOpenDialog,
    handleCloseDialog,
  }
}

export type BaseUseDialog = 'form' | 'delete'
