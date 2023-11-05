import { useState, useEffect } from 'react';
import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input, createTheme,
    ThemeProvider, } from "@mui/material";
import {Container, Row, Col} from 'react-bootstrap';
export const CrosswordSettings = () => {
    const [seed, setSeed] = useState(Math.floor(Math.random() * (2000000000 + 1)));
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
        

            fetch(`https://cheesehacks.onrender.com/getCross?difficulty=${difficulty}&seed=${seed}`)
            .then((response) => response.json())
            .then((result) => {
                // Handle the API response
                console.log(result);
                currElement = document.createElement("div");
                currElement.id = ""
                currElement.innerText = response.json();
                currElement.style.display = "none";
                document.insertBefore(currElement, document.body.firstChild);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <ThemeProvider theme={selectedTheme}>
            <Container fluid={true}>
                <Card style={{ width: "70%", margin: "20px 27%", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
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
                                <MenuItem value="Easy">Easy</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Hard">Hard</MenuItem>
                                {/* Add more MenuItem components as needed */}
                            </Select>
                        </FormControl>
                    </CardContent>
                    <CardContent>
                        {/* Seed input */}
                        <form style={{ margin: "20px 0 0 0", marginBottom: '20px' }}>
                            <TextField
                                label="Enter seed:"
                                variant="outlined"
                                value={seed}
                                onChange={handleSeed}
                            />
                        </form>
                    </CardContent>
                    <CardContent>
                        {/* Generate button */}
                        <Button style={{margin: "20px 0 0 0"}}variant="contained" color="primary" onClick={queryAPI}>
                            Generate
                        </Button>
                    </CardContent>
                    
                </Card>
            </Container>
        </ThemeProvider>
    );
};