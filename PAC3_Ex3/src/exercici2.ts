interface Plane {
  model: string;
  npassengers: number;
}

interface HangarHash {
  [key: string]: Plane;
}

const myHangar: HangarHash = {};

myHangar["123Z"] = {
  model: "airbus",
  npassengers: 200,
};

myHangar["H789"] = {
  model: "boeing",
  npassengers: 151,
};

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */

for (const k in myHangar) {
  console.log(`${k}:${myHangar[k].model}(${myHangar[k].npassengers})`);
}
