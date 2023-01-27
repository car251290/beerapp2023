import React,{useState} from 'react';
import FetchData from '../Apis/FetchData'
import {Card} from '@material-ui/core';
const Beer = ({items}) => {
const [Beer,setBeer] = useState([])

return (
    <>
    <Card elevation={6}
        title={items.name}
        display="flex"
        >
        </Card>
    </>
)
}

export default Beer;