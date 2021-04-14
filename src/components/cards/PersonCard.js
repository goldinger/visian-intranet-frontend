import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class PersonCard extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <Card style={{display: "flex"}}>
                <CardMedia
                    style={{width:151}}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU"
                    title="Icon photo"
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <CardContent style={{
                        flex: '1 0 auto',
                    }}>
                        <Typography component="h5" variant="h5">
                            {data.first_name} {data.last_name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {data.id}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    }
}
