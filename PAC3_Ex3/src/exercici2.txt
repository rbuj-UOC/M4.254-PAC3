Substitueix /***/ per les instruccions adequades que compleixin les operacions 
i sortides indicades als comentaris.


interface Plane{
    model:string,
    npassengers:number
}
/***/

let myHangar:HangarHash = {}

myHangar['123Z']={
    model:'airbus',
    npassengers:200
}
myHangar['H789']={ 
    model:'boeing',
    npassengers:151
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
