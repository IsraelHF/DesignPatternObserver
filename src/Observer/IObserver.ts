import IObservable from "../Observable/IObservable";

export default interface IObserver {
    update(observable: IObservable): void;

}