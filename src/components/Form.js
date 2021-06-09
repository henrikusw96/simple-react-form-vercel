import React, { useState } from 'react';
import { Stack, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, FormHelperText,} from '@chakra-ui/react';

export default function Form() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        console.log("emailAddress", emailAddress)
        console.log("Password", password)
        console.log("Test is working")
    };

    return (
        <form method="POST" onSubmit={handleSignIn}>
            <Stack maxW={600} m="auto" spacing={5} mt={5}>
            <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input required type="email" id="email" aria-describedby="email-helper-text" 
                value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
                <FormHelperText id="email-helper-text">
                    Your Email Address
                </FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="Password">Password</FormLabel>
                <InputGroup>
                <Input required type={showPassword ? 'text' : 'password'} id="password" aria-describedby="password-helper-text" 
                value={password} autoComplete="off"
                onChange={({target}) => setPassword(target.value)}/>
                <InputRightElement w="5rem">
                    <Button h="2rem" size="sm"
                    onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
                
                </InputGroup>
                <FormHelperText id="Password-helper-text">
                    Your Password
                </FormHelperText>
            </FormControl> 
            <FormControl>
                <Button colorScheme="blue" type="submit" disabled={isInvalid}>Sign In</Button>
            </FormControl>
            </Stack>
        </form>
    )
}