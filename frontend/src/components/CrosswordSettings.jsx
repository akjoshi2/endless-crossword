import { useState } from 'react';
import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input, Container } from "@mui/material";

const CrosswordSettings = () => {
    const [seed, setSeed] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleSeed = (event) => {
        setSeed(event.target.value);
    };

    const handleDifficulty = (event) => {
        setDifficulty(event.target.value);
    };

    const queryAPI = () => {
        // Implement your API query logic here
        // You can use 'seed' and 'difficulty' in your query
        // TODO: FIX FAKEURL
        // let fakeurl = ""
        // fetch(fakeurl)
        // .then((response) => response.json())
        // .then((result) => {
        //     // Handle the API response
        //     console.log(result);
        // })
        // .catch((error) => {
        //     console.error('Error fetching data:', error);
        // });
    };

    return (
        <Container  maxWidth="md"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh', // This ensures the card is centered vertically on the screen
        }}>
            <Card style={{ minWidth: 200, maxWidth: 200, margin: '20px', padding: '20px' }}>
                <CardContent>
                    {/* Dropdown options for difficulty */}
                    <FormControl style={{ marginBottom: '20px', width: '100%'}}>
                        <InputLabel style={{minWidth: 100, maxWidth: 1000 }} htmlFor="difficulty-label">Select Difficulty</InputLabel>
                        <Select
                            label="Select Difficulty"
                            value={difficulty}
                            onChange={handleDifficulty}
                            input={<Input id="difficulty" />}
                        >
                            <MenuItem value="easy">Easy</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="hard">Hard</MenuItem>
                            {/* Add more MenuItem components as needed */}
                        </Select>
                    </FormControl>

                    {/* Seed input */}
                    <form style={{ marginBottom: '20px' }}>
                        <TextField
                            label="Enter seed:"
                            variant="outlined"
                            value={seed}
                            onChange={handleSeed}
                        />
                    </form>

                    {/* Generate button */}
                    <Button variant="contained" color="primary" onClick={queryAPI}>
                        Generate
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CrosswordSettings;