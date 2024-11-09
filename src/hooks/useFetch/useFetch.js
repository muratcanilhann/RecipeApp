import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url){
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(true);
    const[data,setData] = useState([]);


    async function fetchData() {
        try {
            const responseData = await axios.get(url);
            setData(responseData.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
    fetchData();

    },[]);

    return {error,loading,data}
}

export default useFetch;