### Enumera i explica els principals avantatges que aporta l'ús de TypeScript sobre JavaScript
TypeScript no es pot executar en un navegador, però es pot transpilar a JavaScript. TypeScript, no només proporciona funcions noves, declaració de tipus i maneres més agradables de fer les coses, també proporciona la capacitat de detectar errors. En l'exemple, permet detectar errors lògics.

TypeScript és una extensió de llenguatge que afegeix funcionalitats a ECMAScript 6 (2015). Les funcionalitats addicionals inclouen:
- Type annotations and compile-time type checking: TypeScript proporciona una escriptura estàtica mitjançant anotacions de tipus per habilitar la comprovació de tipus en temps de compilació. Això és opcional i es pot ignorar per utilitzar l'escriptura dinàmica habitual de JavaScript. L'anotació del tipus es realitza afegint `:` i el tipus, en l'exemple:
```TS
: string
: number
: Dog
```

En l'exemple, en la segona assignació de la instància `dog` de l'objecte `Dog`, s'assigna el valor `true` a la propietat `kind` de tipus `string`.

```
$ tsc exer1.ts 
exer1.ts:14:3 - error TS2322: Type 'boolean' is not assignable to type 'string'.

14   kind: true,
     ~~~~

  exer1.ts:2:3
    2   kind: string;
        ~~~~
    The expected type comes from property 'kind' which is declared here on type 'Dog'


Found 1 error in exer1.ts:14

```
- Type inference: El compilador TypeScript fa ús de la inferència de tipus per inferir tipus quan no es proporciona el tipus. En l'exemple, el mètode `baby` el compilador sap que retorna un `Dog` perquè s'ha proporcionat l'anotació de tipus de retorn `as Dog;`. Si no s'hagués proporcionat el tipus de retorn, la inferència de tipus està a la signatura de la funció `: Dog`. 

- Type erasure: Quan les anotacions de tipus s'eliminen del codi TypeScript a mesura que es transpila a JavaScript.

TypeScript
```TS
let dog: Dog;
function baby(dog1: Dog, dog2: Dog): Dog {
```

JavaScript
```JS
let dog;
function baby(dog1, dog2) {
```

- Interfaces: Permet definir interfícies, un tipus de dades que s'utilitza per a l'abstracció d'una classe.
```TS
interface Dog {
  kind: string;
  weight: number;
}
```

Més informació: https://en.wikipedia.org/wiki/TypeScript