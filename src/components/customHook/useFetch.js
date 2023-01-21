import React, { useState, useEffect } from "react";

const useFetch = (url, obj) => {
  const [datas, setdates] = useState([]);

  useEffect(() => {
    const auth = async () => {
      try {
        let response = await fetch(url, {
          method: "POST",
          headers: {
            "Context-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        let data = await response.json();
        if (data.error) {
          console.log(data);
          alert("error");
          throw new Error(data.error.message);
        } else {
          setdates(data.idToken);
        }
      } catch (error) {
        console.log(error);
      }
    };

    auth();
  }, [url]);

  return { datas };
};

export default useFetch;
