import IObserver from "../Observer/IObserver";
import IObservable from "./IObservable";

export default class ConcreteObservable implements IObservable {

    public state: String;

    private observers: IObserver[] = [];

    anexar(observer: IObserver): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log("Observable: O observador já foi anexado.");
        }
        console.log("Observable: Observador anexado.");
        this.observers.push(observer);
    }

    desanexar(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Observable: Observador inexistente");
        }
        this.observers.splice(observerIndex, 1);
        console.log("Observable: Observador desanexado.");
    }

    notificar(): void {
        console.log("Observable: Notificando observadores...");
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public logicaDeNegocio(state: String): void {
        console.log("\nObservable: houve alteração!");
        //this.state = Math.floor(Math.random() * (10 + 1));
        this.state = state;

        //console.log(`Observable: acabou de chegar o tênis de cor ${this.state}!`);
        console.log("Observable: acabou de chegar o tênis de cor " + state + "!");
        this.notificar();
    }

}