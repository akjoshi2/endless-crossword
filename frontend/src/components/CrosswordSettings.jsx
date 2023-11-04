import { useState, useEffect } from 'react';
import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input, Container, createTheme,
    ThemeProvider, } from "@mui/material";

const CrosswordSettings = () => {
    const [seed, setSeed] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSeed = (event) => {
        setSeed(event.target.value);
    };

    const handleDifficulty = (event) => {
        setDifficulty(event.target.value);
    };

    useEffect(() => {
        // Check if the user prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDarkMode);
    }, []);

    // Create light and dark themes
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const selectedTheme = isDarkMode ? darkTheme : lightTheme;

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
        <ThemeProvider theme={selectedTheme}>
            <Container maxWidth="lg"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',  // Change to 'flex-start' for left alignment
                justifyContent: 'flex-start',  // Change to 'flex-start' for top alignment
                minHeight: '100vh',
                padding: '20px',  // Adjust padding as needed
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
        </ThemeProvider>
    );
};

export default CrosswordSettings;