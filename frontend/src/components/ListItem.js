import React, {useState} from 'react'

export default function ListItem({item, refresh}) {
    const [done, setDone] = useState(false)

    function handleDone ({target}) {
        setDone(target.checked)
        refresh()
    }

    var doneClass = `its${done}`
    
    return (
        <div className={doneClass}>
            <span className='list-item'>
                {item}
            </span>
            <input name='doneBox'
            checked={done}
            type='checkbox' 
            onChange={handleDone}/>
        </div>
    )
}