
export const initialState = JSON.parse(window.localStorage.getItem("msk-todos")) || {
    todos: [
        {
            id: 0,
            title: "Buy Milk",
            completed: false,
            important: false,
        },
        {
            id: 1,
            title: "Room cleaning",
            completed: true,
            important: false,
        },
        {
            id: 2,
            title: "Get Medicines",
            completed: false,
            important: true,
        },
        {
            id: 3,
            title: "Car service",
            completed: false,
            important: false,
        },
        {
            id: 4,
            title: "Prepare for interview",
            completed: true,
            important: false,
        },
    ],
};