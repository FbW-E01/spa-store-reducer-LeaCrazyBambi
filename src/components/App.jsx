import { useReducer } from "react";

const initialState = {
    started: null,
    speed: 0,
    gear: 0,
}

function reducer(previousState, action) {
    switch (action.type) {
        case "start":
            const number = Math.random();
            if (number > 0.5) {
                alert("Starting failed, try again!")
                return previousState
            }
            return {
                started: true,
                speed: previousState.speed,
                gear: previousState.gear,
            }
            
        case "stop":
            return {
                started: false,
                speed: previousState.speed,
                gear: 0,
            }
        case "gear-up":
            if (previousState.started === false) {
                alert("Boat has not been started yet")
                return previousState
            }
            if (previousState.gear === 5) {
                  return previousState
            }
            return {
                started: true,
                speed: previousState.speed,
                gear: previousState.gear + 1,
            }
            case "gear-down":
                if (previousState.started === false) {
                    alert("Boat has not been started yet")
                    return previousState
                }

                if (previousState.gear === -2) {
                    return previousState
                }
                return {
                    started: true,
                    speed: previousState.speed,
                    gear: previousState.gear - 1,
            }
            case "increase-speed":
                if (previousState.started === false) {
                    alert("Boat has not been started yet")
                    return previousState
                }
                if (previousState.gear === 0) {
                    alert("Boat speed cannot be increased as gear is 0")
                    return previousState
                } 
                return {
                    started: true,
                    speed: previousState.speed + (previousState.gear * 10),
                    gear: previousState.gear,
                }
            case "decrease-speed":
                if (previousState.started === false) {
                    alert("Boat has not been started yet")
                    return previousState
                }
                if (previousState.gear === 0) {
                    alert("Boat speed cannot be increased as gear is 0")
                    return previousState
                }
                return {
                    started: true,
                    speed: previousState.speed - (previousState.gear * 10),
                    gear: previousState.gear,
                }       
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>The boat interface</p>    
            {state.started === null && "start the boat"}
            {state.started === false && "boat stopped"}
            {state.started === true && "boat started"}
            <br />
            Boat speed: {state.speed}
            <br />
            Gear: {state.gear}
            <br />
            <button onClick={()=> dispatch({ type: "start"})}>
                start the engine</button>
            <button onClick={()=> dispatch({ type: "stop" })}>
                stop the engine</button>
            <button onClick={()=> dispatch({ type: "gear-up"})}>gear up</button>
            <button onClick={()=> dispatch({ type: "gear-down"})}>gear down</button>
            <button onClick={()=> dispatch({ type: "increase-speed"})}>increase boat speed</button>
            <button onClick={()=> dispatch({ type: "decrease-speed"})}>decrease boat speed</button>
        </div>  
    )
}

export default App;