import { useState } from "react";

import axios from "axios";

const FetchingDataAppicall = () => {
  const [couter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleApiCall = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status === 200) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    } catch (error) {
      setError("fail to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3>Counter App with Api call suceess</h3>

      <p>Couter :{couter}</p>
      {loading ? <p>Loading....</p> : null}
      {error ? <p style={{ color: "red" }}>Error :{error}</p> : null}

      <button onClick={handleApiCall}>Increment</button>
    </>
  );
};
export default FetchingDataAppicall;
