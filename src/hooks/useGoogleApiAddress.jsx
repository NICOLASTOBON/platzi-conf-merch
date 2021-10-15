import { useState, useEffect } from "react";
import initialApiGeo from "../initialApiGeo";

function useGoogleApiAddress() {
  const [ map, setMap ] = useState({});

  useEffect(() => {
    setMap(initialApiGeo.results[0].geometry.location)
  }, [])

  return { map }
}

export { useGoogleApiAddress }