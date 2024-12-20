import logo from './logo.svg';
import './App.css';

import { AppBar, Toolbar, IconButton, Typography, makeStyles, Box, Container, Paper } from "@material-ui/core";
import TodoAdder from './components/todo-adder';
import TodoContainer from './components/todos-container';

const useStyles = makeStyles((theme) => ({
  root: {},
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    margin: 100,
    //backgroundColor: "blue",
  },
  wrapper: {
    textAlign: "center",
    width: "100%",
  },
}));

export default function App() {
  const classes = useStyles();

  return <Box className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit"> 
          <img 
            alt="MSK TODOS Logo"
            style={{
              width: "50px",
            }} 
            src="todos_logo.png"
          ></img>
        </IconButton>
        <Typography variant="h5">Todos</Typography>
      </Toolbar>
    </AppBar>

    <Container className={classes.appContainer}>
      <Paper className={classes.wrapper} elevation={0}>
        {/* A component to add Todos - "TodoAdder" */}
        <TodoAdder />

        {/* The container area to display all todos - "TodosContainer"  */}
        <TodoContainer />
      </Paper>
    </Container>

  </Box>
}
