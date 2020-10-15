import React from 'react'
import Card from 'react-bootstrap/Card'

import ListItem from './ListItem'

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

    return (
        <Card key={list._id} className='list-card'>
            <Card.Header>
                {list.name}
            </Card.Header>
            {displayItems}
        </Card>
    )
}