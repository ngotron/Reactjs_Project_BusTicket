const renderSeats = () =>{

    const listABC = ["A","B","C"];
    const endList = ["A11","A13","B11","C11","C13"]
    var seats = [];
    var iArr = 0;

    const renderWithout = (num) =>{
        do {
            var rand = Math.floor(Math.random() * 4)
        } while (rand === num);
        return rand;
    }

    for (let index = 1; index < 10; index+=2) {
        listABC.forEach((element,i) => {
            seats.push({
                name: element+index,
                status_s: renderWithout(1),
                position : iArr
            });
            iArr += 1;
        });
    }

    endList.forEach(element => {
        seats.push({
            name: element,
            status_s:renderWithout(1) ,
            position: iArr
        });
        iArr += 1;
    });
    
    return seats;
    
}
export default renderSeats;