import { Button, Divider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Common from '../Common'

export default function Calculator() {
    const history = useHistory()
    return (
        <Common title="Calculator">
            <Button onClick={() => history.push("/")} variant="outlined" color="secondary" className="m-3">
                Home
            </Button>
            <Divider/>
            <br/>
            <div>
                Calculator
            </div>
        </Common>
    )
}
