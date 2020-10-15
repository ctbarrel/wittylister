import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

export default function ListItem({item, refresh}) {
    const [done, setDone] = useState(false)

    function handleDone ({target}) {
        setDone(target.checked)
        refresh()
    }

    var doneClass = `its${done}`
    
    return (
        <div>
            <span className={doneClass}>
                {item}
            </span>
            <input name='doneBox'
            checked={done}
            type='checkbox' 
            onChange={handleDone}/>
        </div>
    )
}