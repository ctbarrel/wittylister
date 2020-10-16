import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListItem from './ListItem'

const API_URL = process.env.REACT_APP_API_URL

export default function ListCard({ list, refresh }) {

    const displayItems = list.items.map(
        item => {
            return (
                <ListItem item={item}
                    key={`${list._id}${list.items.indexOf(item)}`}
                    refresh={refresh} />
            )
        }
    )

    function handleDelete() {
        fetch(`${API_URL}listers/${list._id}`, {
            method: 'DELETE'
        })
        .then(refresh)
    }
    
    return (
        <Card key={list._id} className='list-card'>
            <Card.Header>
                <p className='listname'>{list.name}</p>
                <Button className='dltbtn'
                variant='danger'
                onClick={handleDelete}>🗑</Button>
            </Card.Header>
            {displayItems}
        </Card>
    )
}