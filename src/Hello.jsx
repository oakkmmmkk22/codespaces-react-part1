import './Hello.css'
export default function Hello  ({firstname, lastname="Jaidee"}){
    return (
        <>
            <h1>Hello {firstname +" "+ lastname}</h1>
            <hr />
        </>
    )
}