import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './textReaderStyles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@mui/material/TextField';

const TextReader: React.FC = () => {

    const [raised, setRaised] = useState<boolean>(false);
    const classes: Record<'root' | 'title' | 'pos', string> = useStyles();
    const toggleRaised = (): void => setRaised(!raised);
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const readText = () => {
        speechSynthesis.speak(
            new SpeechSynthesisUtterance(value))
    };

    return (
        <>
            <Card
                className={classes.root}
                onMouseOver={toggleRaised}
                onMouseOut={toggleRaised}
                raised={raised}
            >
                <CardContent>
                    <Typography variant='h5' component='h2'>
                        Text to speech reader
                    </Typography>

                    <div className='grid-container'>
                        <div className='textArea'>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Text you text here"
                                multiline
                                rows={15}
                                fullWidth={true}
                                value={value}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='buttonContainer'>
                            <Button variant='contained' color='primary' onClick={() => readText()} >
                                Read
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default TextReader