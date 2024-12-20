import React from "react";
import { useSelector } from "react-redux";

import { Box, makeStyles, Grid, Typography, Divider, List } from '@material-ui/core';
import TodoItem from "./todo-item";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        margin: 20,
        backgroundColor: "rgb(92.9%, 92.9%, 92.9%)",
    },
    
  }));

export default function TodoContainer(){
    const classes = useStyles();

    const { todos } = useSelector((state) => {
        return {
            todos: state.todos,
        };
    });

    console.log(todos);

    // Important todo are placed at the top and non-important tods are placed bottom
    const prioritisedTodos = (function prioritise() {
        const importantTodos = [];
        const nonImportantTodos = [];

        todos.forEach(todo => {
            if(todo.important){
                importantTodos.push(todo);
            } else {
                nonImportantTodos.push(todo);
            }
        });

        return importantTodos.concat(nonImportantTodos);
    })();

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>My Todos</Typography>
                    <Divider />
                    <List>
                        {prioritisedTodos.map((todo) => {
                            if(!todo.completed){
                                return <TodoItem {...todo} />;
                            }
                        })}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>Completed</Typography>
                    <Divider />
                    <List>
                        {prioritisedTodos.map((todo) => {
                            if(todo.completed){
                                return <TodoItem {...todo} />;
                            }
                        })}
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}