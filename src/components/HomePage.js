import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import PHQQuestion from './PHQQuestion';
import PHQQuestionFinal from './PHQQuestionFinal';
import GADQuestion from './GADQuestion';
import GADQuestionFinal from './GADQuestionFinal';

const finalConversion = [
  { id: 0, text: 'Not difficult at all' },
  { id: 1, text: 'Somewhat difficult' },
  { id: 2, text: 'Very Difficult' },
  { id: 3, text: 'Extremely Difficult' },
];

const phqConversion = [
  { id: 0, text: '1. Little interest or pleasure in doing things.' },
  { id: 1, text: '2. Feeling down, depressed, or hopeless.' },
  {
    id: 2,
    text: '3. Trouble falling or staying asleep, or sleeping too much.',
  },
  { id: 3, text: '4. Feeling tired or having little energy.' },
  { id: 4, text: '5. Poor appetite or overeating.' },
  {
    id: 5,
    text: '6. Feeling bad about yourself – or that you are a failure or have let yourself or your family down.',
  },
  {
    id: 6,
    text: '7. Trouble concentrating on things, such as reading the newspaper or watching television.',
  },
  {
    id: 7,
    text: '8. Moving or speaking so slowly that other people could have noticed. Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual.',
  },
  {
    id: 8,
    text: '9. Thoughts that you would be better off dead, or of hurting yourself in some way.',
  },
];

const gadConversion = [
  { id: 0, text: '1. Feeling nervous, anxious, or on edge.' },
  { id: 1, text: '2. Not being able to stop or control worrying.' },
  { id: 2, text: '3. Worrying too much about different things.' },
  { id: 3, text: '4. Trouble relaxing.' },
  { id: 4, text: '5. Being so restless that it’s hard to sit still.' },
  { id: 5, text: '6. Becoming easily annoyed or irritable.' },
  { id: 6, text: '7. Feeling afraid as if something awful might happen.' },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function HomePage() {
  const [phqScore, setPhqScore] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [phqFinal, setPhqFinal] = React.useState([null, null]);

  const [phqErrorNeedToFill, setPhqErrorNeedToFill] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [gadScore, setGadScore] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [gadFinal, setGadFinal] = React.useState([null, null]);

  const [gadErrorNeedToFill, setGadErrorNeedToFill] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [snackBar, setSnackBar] = React.useState({
    isOpen: false,
    message: '',
    severity: '',
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBar({ isOpen: false, message: '', severity: '' });
  };

  function updatePHQScore(scoreLocationToUpdate, score) {
    var copyOfPhqScore = phqScore;
    copyOfPhqScore[scoreLocationToUpdate] = score;
    setPhqScore([...copyOfPhqScore]);

    var copyOfPhqFinal = phqFinal;
    copyOfPhqFinal[0] = copyOfPhqScore;
    setPhqFinal([...copyOfPhqFinal]);
  }

  function updatePHQFinal(finalScore) {
    var copyOfPhqFinal = phqFinal;
    copyOfPhqFinal[1] = finalScore;
    setPhqFinal([...copyOfPhqFinal]);
  }

  function updateGADScore(scoreLocationToUpdate, score) {
    var copyOfGadScore = gadScore;
    copyOfGadScore[scoreLocationToUpdate] = score;
    setGadScore([...copyOfGadScore]);

    var copyOfGadFinal = gadFinal;
    copyOfGadFinal[0] = copyOfGadScore;
    setGadFinal([...copyOfGadFinal]);
  }

  function updateGADFinal(finalScore) {
    var copyOfGadFinal = gadFinal;
    copyOfGadFinal[1] = finalScore;
    setGadFinal([...copyOfGadFinal]);
  }

  function copyToClipboard() {
    if (!phqNull && !gadNull) {
      setSnackBar({
        isOpen: true,
        message: `Copied results successfully`,
        severity: 'success',
      });
      const textToPaste = `PHQ9
--------------------------------------------------------------------
1. Little interest or pleasure in doing things.: ${phqScore[0]}
2. Feeling down, depressed, or hopeless.: ${phqScore[1]}
3. Trouble falling or staying asleep, or sleeping too much.: ${phqScore[2]}
4. Feeling tired or having little energy.: ${phqScore[3]}
5. Poor appetite or overeating.: ${phqScore[4]}
6. Feeling bad about yourself – or that you are a failure or have let yourself or your family down.: ${
        phqScore[5]
      }
7. Trouble concentrating on things, such as reading the newspaper or watching television.: ${
        phqScore[6]
      }
8. Moving or speaking so slowly that other people could have noticed. Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual.: ${
        phqScore[7]
      }
9. Thoughts that you would be better off dead, or of hurting yourself in some way.: ${
        phqScore[8]
      }

Total Score: ${phqScore.reduce((a, b) => a + b, 0)}

If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?:

${finalConversion.find((phrase) => phrase.id === phqFinal[1]).text}

GAD7
--------------------------------------------------------------------
1. Feeling nervous, anxious, or on edge.: ${gadScore[0]}
2. Not being able to stop or control worrying.${gadScore[1]}
3. Worrying too much about different things.${gadScore[2]}
4. Trouble relaxing.${gadScore[3]}
5. Being so restless that it’s hard to sit still.${gadScore[4]}
6. Becoming easily annoyed or irritable.${gadScore[5]}
7. Feeling afraid as if something awful might happen.${gadScore[6]}

Total Score: ${gadScore.reduce((a, b) => a + b, 0)}

If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?:

${finalConversion.find((phrase) => phrase.id === gadFinal[1]).text}
`;

      navigator.clipboard.writeText(textToPaste);
    } else {
      if (phqNull) {
        if (phqScore.includes(null) === true) {
          const indexOfFirstNull = phqScore.findIndex(
            (score) => score === null
          );
          var phqErrorNeedToFillCopy = phqErrorNeedToFill;
          phqErrorNeedToFillCopy[indexOfFirstNull] = true;
          setPhqErrorNeedToFill([...phqErrorNeedToFillCopy]);
          setSnackBar({
            isOpen: true,
            message: `PHQ item ${indexOfFirstNull + 1} is empty.`,
            severity: 'error',
          });
        } else {
          var phqErrorNeedToFillCopy = phqErrorNeedToFill;
          phqErrorNeedToFillCopy[9] = true;
          setPhqErrorNeedToFill([...phqErrorNeedToFillCopy]);

          setSnackBar({
            isOpen: true,
            message: `PHQ difficulty scale is empty.`,
            severity: 'error',
          });
        }
      } else if (gadNull) {
        if (gadScore.includes(null) === true) {
          const indexOfFirstNull = gadScore.findIndex(
            (score) => score === null
          );
          var gadErrorNeedToFillCopy = gadErrorNeedToFill;
          gadErrorNeedToFillCopy[indexOfFirstNull] = true;
          setGadErrorNeedToFill([...gadErrorNeedToFillCopy]);
          setSnackBar({
            isOpen: true,
            message: `GAD item ${indexOfFirstNull + 1} is empty.`,
            severity: 'error',
          });
        } else {
          var gadErrorNeedToFillCopy = gadErrorNeedToFill;
          gadErrorNeedToFillCopy[7] = true;
          setGadErrorNeedToFill([...gadErrorNeedToFillCopy]);

          setSnackBar({
            isOpen: true,
            message: `GAD difficulty scale is empty.`,
            severity: 'error',
          });
        }
      }
    }
  }

  const phqNull =
    phqScore.includes(null) === true || phqFinal.includes(null) === true;
  const gadNull =
    gadScore.includes(null) === true || gadFinal.includes(null) === true;

  return (
    <div style={{ margin: '25px' }}>
      <p>
        Over the last 2 weeks, how often have you been bothered by any of the
        following problems? Please circle your answers.{' '}
      </p>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={4}>
          <p>PHQ-9</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>Not at all</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>Several Days</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>More than half the days</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>Nearly Every Day</p>
        </Grid>
        {phqConversion.map((question) => (
          <PHQQuestion
            key={question.text}
            questionIndex={question.id}
            questionText={question.text}
            updatePHQScore={updatePHQScore}
            phqErrorNeedToFill={phqErrorNeedToFill}
          />
        ))}
        <PHQQuestionFinal
          updatePHQFinal={updatePHQFinal}
          phqErrorNeedToFill={phqErrorNeedToFill}
        />
        {phqScore.includes(null) !== true && (
          <p>{`Total Score: ${phqScore.reduce((a, b) => a + b, 0)}`}</p>
        )}
      </Grid>
      <hr />
      <p>
        Over the last 2 weeks, how often have you been bothered by any of the
        following problems? Please circle your answers.{' '}
      </p>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={4}>
          <p>GAD-7</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>Not at all</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>Several Days</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>More than half the days</p>
        </Grid>
        <Grid item xs={3} sm={2}>
          <p>Nearly Every Day</p>
        </Grid>
        {gadConversion.map((question) => (
          <GADQuestion
            key={question.text}
            questionIndex={question.id}
            questionText={question.text}
            updateGADScore={updateGADScore}
            gadErrorNeedToFill={gadErrorNeedToFill}
          />
        ))}

        <GADQuestionFinal
          updateGADFinal={updateGADFinal}
          gadErrorNeedToFill={gadErrorNeedToFill}
        />
        {gadScore.includes(null) !== true && (
          <p>{`Total Score: ${gadScore.reduce((a, b) => a + b, 0)}`}</p>
        )}
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        textAlign={'center'}
        p={5}
      >
        <Button variant="contained" onClick={copyToClipboard}>
          Copy to Clipboard 📋
        </Button>
      </Grid>
      <Snackbar
        open={snackBar.isOpen}
        autoHideDuration={1600}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackBar.severity}
          sx={{ width: '100%' }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default HomePage;
