export const CarInfo = ({car}) => {
console.log(car)
    return(
        <div key={car.id}>CAR INFO {car.make} 
           <img src={car.img} alt="" />
           <ul>
            <li>
                <h2>{car.make} {car.model}, {car.year}</h2>
                <p></p>
                <p></p>
                <p></p>
            </li>
            <li>
                <p></p>
                <p></p>
                <p></p>
                </li>
            <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </li>
        </ul>
        <button type="button"></button>
        </div>
    )
}