import React from 'react'
import Card from 'react-bootstrap/Card'

import ListItem from './ListItem'

export default function ListCard({ list, refresh }) {

    const displayItems = list.items.map(
        item => {
            return (
                <ListItem item={item}
                    key={item._id}
                    refresh={refresh} />
            )
        }
    )

    return (
        <Card key={list._id}>
            <Card.Header>
                {list.name}
            </Card.Header>
            {displayItems}
        </Card>
    )
}