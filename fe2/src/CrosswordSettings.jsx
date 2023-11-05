import { useState, useEffect } from 'react';
import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input, createTheme,
    ThemeProvider, Typography, Grid } from "@mui/material";
import {Container, Row, Col} from 'react-bootstrap';
import eventBus from "./eventBus";
export const CrosswordSettings = () => {
    const [currSeed, setCurrSeed] = useState(4);
    const [customSeed, setCustomSeed] = useState('');
    const [difficulty, setDifficulty] = useState('Hard');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSeed = (event) => {
        setCustomSeed(event.target.value);
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
        
            console.log(customSeed)
            console.log(currSeed)
            if (customSeed.length === 0){
                console.log("inside")
                let randomNum = Math.floor(Math.random() * (2000000))
                setCurrSeed(randomNum);
                fetch(`https://cheesehacks.onrender.com/getCross?difficulty=${difficulty}&seed=${randomNum}`)
                .then((response) => response.json())
                .then((result) => {
                    // Handle the API response
                    console.log(result);
                    console.log(customSeed)
                    console.log(currSeed)
                    eventBus.emit('reactDOMChange',result);
                }).catch((error) => {
                    console.error('Error fetching data:', error);
                });
            }
            else
            {
                setCurrSeed(customSeed);
                fetch(`https://cheesehacks.onrender.com/getCross?difficulty=${difficulty}&seed=${customSeed}`)
                .then((response) => response.json())
                .then((result) => {
                    // Handle the API response
                    console.log(result);
                    console.log(customSeed)
                    console.log(currSeed)
                    eventBus.emit('reactDOMChange',result);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
            }

    };

    return (
        <ThemeProvider theme={selectedTheme}>
            <Container fluid={true}>
                <Grid container spacing={2} style={{marginTop: '10px'}}>
                    <Grid item xs={3} style={{ padding: "0px"}}>
                    <FormControl size="small" style={{ marginBottom: '5px', width: '100%', marginTop: '10px'}}>
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
                            </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={3} style={{ padding: "0px"}}>
                    <form style={{marginTop: "16px", marginBottom: '5px', marginLeft: '8px' }}>
                            <TextField
                                size="small"
                                label="Current Seed:"
                                variant="outlined"
                                disabled
                                value={currSeed}
                            />
                    </form>
                    </Grid>
                    <Grid item xs={3} style={{ padding: "0px"}}>
                    <form style={{marginTop: "16px", marginBottom: '5px', marginLeft: '8px' }}>
                            <TextField
                                size="small"
                                label="Custom Seed:"
                                variant="outlined"
                                value={customSeed}
                                onChange={handleSeed}
                                onKeyPress= {(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        queryAPI();
                                    }
                            }}
                            />
                    </form>
                    </Grid>
                    <Grid item xs={3} style={{ padding: "0px"}}>
                    <Button style={{margin: "17px 0 0 0", background: "#a7d8ff", color:"#000000"}}variant="contained" color="primary" onClick={queryAPI}>
                            Generate
                    </Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>

    );

    /*return (
        <ThemeProvider theme={selectedTheme}>
            <Container fluid={true}>
                <Card style={{ width: "70%", margin: "20px 27%", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }}>
                    <CardContent>
                        <FormControl style={{ marginBottom: '20px', width: '100%', marginTop: '20px'}}>
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
                            </Select>
                        </FormControl>
                    </CardContent>
                    <CardContent>
                        <form style={{ margin: "20px 0 0 0", marginBottom: '20px' }}>
                            <TextField
                                label="Current Seed:"
                                variant="outlined"
                                disabled
                                value={currSeed}
                            />
                        </form>
                    </CardContent>
                    <CardContent>
                        <form style={{ margin: "20px 0 0 0", marginBottom: '20px' }}>
                            <TextField
                                label="Custom Seed:"
                                variant="outlined"
                                value={customSeed}
                                onChange={handleSeed}
                            />
                        </form>
                    </CardContent>
                    <CardContent>
                        <Button style={{margin: "30px 0 0 0", background: "#a7d8ff", color:"#000000"}}variant="contained" color="primary" onClick={queryAPI}>
                            Generate
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </ThemeProvider>
    );*/
};