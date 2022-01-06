import * as React from 'react';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';

function GADQuestionFinal({ updateGADFinal, gadErrorNeedToFill }) {
  const [selectedValue, setSelectedValue] = React.useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    updateGADFinal(Number(event.target.value));
  };

  return (
    <>
      <p
        style={{
          fontWeight: selectedValue ? 'bold' : 'normal',
          color: gadErrorNeedToFill[7] && !selectedValue ? 'red' : 'black',
        }}
      >
        How difficult have these made it for you to do your work, take care of
        things at home, or get along with other people?
      </p>

      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign={'center'}
        >
          <Radio
            checked={selectedValue === '0'}
            onChange={handleChange}
            value="0"
            name="radio-buttons"
            inputProps={{ 'aria-label': '0' }}
          />
          {'Not difficult at all'}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign={'center'}
        >
          <Radio
            checked={selectedValue === '1'}
            onChange={handleChange}
            value="1"
            name="radio-buttons"
            inputProps={{ 'aria-label': '1' }}
          />
          {'Somewhat difficult'}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign={'center'}
        >
          <Radio
            checked={selectedValue === '2'}
            onChange={handleChange}
            value="2"
            name="radio-buttons"
            inputProps={{ 'aria-label': '2' }}
          />
          {'Very Difficult'}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign={'center'}
        >
          <Radio
            checked={selectedValue === '3'}
            onChange={handleChange}
            value="3"
            name="radio-buttons"
            inputProps={{ 'aria-label': '3' }}
          />
          {'Extremely Difficult'}
        </Grid>
      </Grid>
    </>
  );
}

export default GADQuestionFinal;
