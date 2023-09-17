function StartScreen({numQuestions, dispatch}) {
    return (
        <div className="start">
            <h2>Welcome to the learning Quiz!</h2>
            <h3>{numQuestions} questions to test your React skill set.</h3>
            <button className="btn btn-ui" onClick={() => dispatch({type: "start", payload: ""})}>Let's begin</button>
        </div>
    )
}

export default StartScreen
