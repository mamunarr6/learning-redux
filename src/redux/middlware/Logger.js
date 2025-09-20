const logger = (store) => (next) => (action) =>{
    const currentState = store.getState();

    console.log("From logger",currentState)
}

export default logger;