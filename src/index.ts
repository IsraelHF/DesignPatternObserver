import ConcreteObservable from "./Observable/ConcreteObservable";
import ConcreteObserverA from "./Observer/ConcreteObserverA";
import ConcreteObserverB from "./Observer/ConcreteObserverB";

const observable = new ConcreteObservable();
//const observable2 = new ConcreteObservable2();

const observer1 = new ConcreteObserverA();
observable.anexar(observer1);

const observer2 = new ConcreteObserverB();
observable.anexar(observer2);

observable.logicaDeNegocio("azul");
observable.logicaDeNegocio("preto");

observable.desanexar(observer2);

observable.logicaDeNegocio("preto");

