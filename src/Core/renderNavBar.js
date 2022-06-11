const renderRouteCar = (data)=>{
    const seen = new Set();
    return data.filter(el => {
     const duplicate = seen.has(el.route);
     seen.add(el.route);
     return !duplicate;
   }).map(
     (item,i)=><option key={i}>{item.route}</option>)
 }
const renderHomeCar = (data) =>{
    const seen = new Set();
    return data.filter(el => {
     const duplicate = seen.has(el.homeCar);
     seen.add(el.homeCar);
     return !duplicate;
   }).map(
     item=><option>{item.homeCar}</option>)
}
 export {renderRouteCar,renderHomeCar};