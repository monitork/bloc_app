import {Bloc} from "@felangel/bloc";
import {CounterEvent} from "./CounterEvent";
import {CounterState} from "./CounterState";

export class CounterBloc extends Bloc<CounterEvent, CounterState> {
    initialState(): CounterState {
        return new CounterState(0);
    }

    async* mapEventToState(event: CounterEvent) {
        switch (event) {
            case CounterEvent.increment:
                yield new CounterState(this.currentState.counter + 1);
                break;
            case CounterEvent.decrement:
                // yield this.currentState.counter - 1;
                yield new CounterState(this.currentState.counter - 1);
                break
        }
    }
}
