import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const CrosswordSettings = (props) => {
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
        let fakeurl = ""
        fetch(fakeurl)
        .then((response) => response.json())
        .then((result) => {
            // Handle the API response
            console.log(result);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };

    return (
        <Card>
            <CardContent>
                {/* Dropdown options for difficulty */}
                <FormControl>
                    <InputLabel htmlFor="difficulty">Select Difficulty</InputLabel>
                    <Select
                        value={difficulty}
                        onChange={handleDifficulty}
                        input={<TextField id="difficulty" variant="outlined" />}
                    >
                        <MenuItem value="easy">Easy</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="hard">Hard</MenuItem>
                        {/* Add more MenuItem components as needed */}
                    </Select>
                </FormControl>

                {/* Seed input */}
                <form>
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
    );
};

export default CrosswordSettings;
