import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useState } from 'react'
const CheckBox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Checkbox
        checked={checked}
        color="primary"
        onClick={() => setChecked(!checked)}
        icon={<DeleteIcon/>}
        checkedIcon={<DeleteIcon/>}>


      </Checkbox>
    </div>
  )
}

export default CheckBox