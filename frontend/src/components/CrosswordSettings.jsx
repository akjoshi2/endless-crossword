import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const CrosswordSettings = (props) => {
    const [value, setValue] = React.useState('');

    const queryAPI = (seed, ) => {

    }
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleDifficulty = () => {
        
    }
    return (
        <Card>
            <CardContent>
                {/* Our dropdown options for difficulty */}
                <FormControl>
                    <InputLabel htmlFor="difficulty">Select Difficulty</InputLabel>
                    <Select
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

                {/* Our seed*/}
                <form>
                    <TextField
                        label="Enter seed:"
                        variant="outlined"
                        value={value}
                        onChange={handleChange}
                    />
                </form>

                {/* Our button */}
                <Button variant="contained" color="primary" onClick="queryAPI">Generate</Button>
            
            </CardContent>
        </Card>
      );
}
export default CrosswordSettings