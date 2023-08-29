import ConcreteObservable from "../Observable/ConcreteObservable";
import IObservable from "../Observable/IObservable";
import IObserver from "./IObserver";

export default class ConcreteObserverA implements IObserver{
    update(observable: IObservable): void {
        if(observable instanceof ConcreteObservable && observable.state === "azul"){
            console.log("ConcreteObserverA: Reagiu ao evento.");
        }
    }
    
}