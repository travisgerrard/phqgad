import * as React from 'react';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';

function GADQuestion01({
  questionIndex,
  questionText,
  updateGADScore,
  gadErrorNeedToFill,
}) {
  const [selectedValue, setSelectedValue] = React.useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    updateGADScore(questionIndex, Number(event.target.value));
  };

  return (
    <>
      <Grid item xs={12} sm={4}>
        <p
          style={{
            fontWeight: selectedValue ? 'bold' : 'normal',
            color:
              gadErrorNeedToFill[questionIndex] && !selectedValue
                ? 'red'
                : 'black',
          }}
        >
          {questionText}
        </p>
      </Grid>

      <Grid item xs={3} sm={2} zeroMinWidth>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Radio
            checked={selectedValue === '0'}
            onChange={handleChange}
            value="0"
            name="radio-buttons"
            inputProps={{ 'aria-label': '0' }}
          />
          {'0'}
        </div>
      </Grid>
      <Grid item xs={3} sm={2} zeroMinWidth>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Radio
            checked={selectedValue === '1'}
            onChange={handleChange}
            value="1"
            name="radio-buttons"
            inputProps={{ 'aria-label': '1' }}
          />
          {'1'}
        </div>
      </Grid>
      <Grid item xs={3} sm={2} zeroMinWidth>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Radio
            checked={selectedValue === '2'}
            onChange={handleChange}
            value="2"
            name="radio-buttons"
            inputProps={{ 'aria-label': '2' }}
          />
          {'2'}
        </div>
      </Grid>
      <Grid item xs={3} sm={2} zeroMinWidth>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Radio
            checked={selectedValue === '3'}
            onChange={handleChange}
            value="3"
            name="radio-buttons"
            inputProps={{ 'aria-label': '3' }}
          />
          {'3'}
        </div>
      </Grid>
    </>
  );
}

export default GADQuestion01;
