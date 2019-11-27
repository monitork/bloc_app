import React from 'react'
// @ts-ignore
import {BlocBuilder} from '@felangel/react-bloc'
import {CounterBloc, CounterEvent, CounterState} from '.';

export const CounterPage: React.FC = () => {
    let bloc = new CounterBloc();
    return (
        <div className="App">
            <p>Counter</p>
            <BlocBuilder
                bloc={bloc}
                builder={(counterState: CounterState) => {
                    return <p>{counterState.counter}</p>
                }}
            />
            <button onClick={() => bloc.dispatch(CounterEvent.increment)}>Increase Counter</button>
            <button onClick={() => bloc.dispatch(CounterEvent.decrement)}>Decrement Counter</button>
        </div>
    )
};
