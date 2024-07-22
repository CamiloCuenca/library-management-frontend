import { useNavigate } from "react-router-dom"

export function Login(){

  const navigate = useNavigate();

  const handleLogin= () => {
    //need to add authentication logic
    navigate("/home")
  }

    return(
      <div>

      <label>
        Name: <input name="myInput" />
      </label>

      <label>
        Password: <input type="password"></input>
      </label>

        <button onClick={handleLogin}>Login</button>
      

      </div>
       
    )
}