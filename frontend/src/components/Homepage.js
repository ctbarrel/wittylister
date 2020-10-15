import React, { Component } from 'react'
import ListCard from './ListCard'
import NewLister from './AddLister'
const API_URL = process.env.REACT_APP_API_URL

export default class extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            listers: [],
            userView: ''
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
        this.refresh()
    }

    refresh = () => {
        fetch(`${API_URL}listers`)
            .then(res => res.json())
            .then(listers => this.setState({ listers }))
    }

    render() {

        const displayLists = this.state.listers.map(
            list => {
                if (this.state.userView === list.user) {
                    return (
                        <ListCard list={list}
                            refresh={this.refresh}
                            key={list._id} />
                    )
                }
            }
        )

        return (
            <div>
                <h1>Witty Listers</h1>
                <input name='userView'
                value={this.state.userView}
                placeholder='Enter Username Here' 
                onChange={this.handleChange}/> 
                <br /><NewLister refresh={this.refresh} user={this.state.userView}/>
                <br />
                {displayLists}
            </div>
        )
    }
}