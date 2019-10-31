import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20
  },
  title: {
    flexGrow: 1,
    fontSize: '1rem'
  },
  formTitle: {
    fontSize: '1.25rem',
    margin: '5px 0'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 250
  },
  controlBtns: {
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  center: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  confirmList: {
    maxWidth: 250,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing(2)
  },
  alignRigth: {
    marginLeft: 'auto'
  },
  alignLeft: {
    marginRight: 'auto'
  },
  listText: {
    wordBreak: 'break-word'
  },
  messageContainer: {
    marginTop: 16,
    marginBottom: 16
  },
  successMessage: {
    margin: '20px 0'
  },
  errorMessage: {
    color: 'red'
  }
}));
