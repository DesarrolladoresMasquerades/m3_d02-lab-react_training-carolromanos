export default function IdCard(props){

    return (
        <div className="Cards">
        <div className="IdCards">
            <img src={props.picture} alt="profile" />
            <ul>
                <li> <strong>First name:</strong> {props.firstName} </li>
                <li> <strong>Last name:</strong> {props.lastName} </li>
                <li> <strong>Gender:</strong> {props.gender} </li>
                <li> <strong>Height:</strong> {props.height} </li>
                <li> <strong>Birth:</strong> {props.birth.toString().slice(0, 15)} </li>
            </ul>
        </div>
        </div>
    )
}