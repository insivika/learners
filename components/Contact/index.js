import React, {useState} from 'react'
import { Box, Stack, Container, Typography, TextField, Button } from '@mui/material';
import { validateEmail } from '../../Utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState( {name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
        
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <Container>
            <section>
                <Box sx={{ py: 6 }}>
                <Typography variant="h4">Let's Connect!</Typography>
                <p>Please provide your name, email, and a brief message and we will get back to you at the earliest convenience. Thanks for visiting! 👍</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <Stack direction="row" spacing={5} >
                        <TextField id="filled-basic" label="Name" variant="filled" name="name" defaultValue={name} onBlur={handleChange} />
                        <TextField id="filled-basic" label="Email" variant="filled"  type="email" name="email" required defaultValue={email} onBlur={handleChange} />
                    </Stack>
                    <Box display="flex" flexDirection="column" multiline sx={{ py:5 }}>
                        <TextField multiline rows="3" id="filled-basic" label="Message" name="message" Boxs="5" defaultValue={message} onBlur={handleChange} />
                    </Box>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <Button sx={{ float: "right" }} variant="outlined" type="submit">Submit</Button>
                </form>
                </Box>
            </section>
        </Container>
    )
}

export default ContactForm;