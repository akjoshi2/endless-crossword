import { useState } from 'react';
import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const CrosswordSettings = () => {
    //const [seed, setSeed] = useState('');
    //const [difficulty, setDifficulty] = useState('');

    /*const handleSeed = (event) => {
        setSeed(event.target.value);
    };*/

    /*const handleDifficulty = (event) => {
        setDifficulty(event.target.value);
    };*/

    /*const queryAPI = () => {
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
    };*/
    
    return (
        <Card>
            <Button variant="contained" color="primary">
                Generate
            </Button>
        </Card>

    );
};