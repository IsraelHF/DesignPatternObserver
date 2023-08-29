import IObserver from "../Observer/IObserver";

export default interface IObservable{
    // Anexa um observador ao subject.
    anexar(observer: IObserver): void;

    // Desanexa um observador do subject.
    desanexar(observer: IObserver): void;

    // Notifica todos os observadores sobre um evento.
    notificar(): void;
}
