

function Input({type, placeholder, value, onChange}){
    return(
        <div className="input-box">
            <input
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="input"
            />
        </div>
    )
}
export default Input;