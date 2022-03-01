export default function Greetings(props){
    console.log(props)
    const greetingText = {
        "de": "Hallo",
        "fr": "Bonjour",
        "es": "Hola",
        "en": "Hello"
    }

    return(
        <div>
            <p>{greetingText[props.lang]} {props.children}</p>
        </div>
    )
}