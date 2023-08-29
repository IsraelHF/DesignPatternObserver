import ConcreteObservable from "../Observable/ConcreteObservable";
import IObservable from "../Observable/IObservable";
import IObserver from "./IObserver";

export default class ConcreteObserverB implements IObserver {
    update(observable: IObservable): void {
        //if (observable instanceof ConcreteObservable && (observable.state === 0 || observable.state >= 2)) {
        if (observable instanceof ConcreteObservable && observable.state === "preto") {
            console.log('ConcreteObserverB: Reagiu ao evento.');
        }
    }

}