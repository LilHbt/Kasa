import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../datas/data.json";
import Carousel from "../../components/carousel/carousel";
import BodyFiche from "../../components/BodyFiche/BodyFiche";

const FicheLogement = () => {
  const { id } = useParams();
  const [activeLogement, setActiveLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const index = data.findIndex((item) => item.id === id);
    setActiveLogement(data[index]);
    setLoading(false);
  }, [id]);
  //loading&& <div>description</div> pour les scroller
  return (
  <div>
    
    <Carousel  data={activeLogement} />
    {loading ? <div>Loading...</div> : <BodyFiche data={activeLogement } />}
    
    </div>
  )
  
};
export default FicheLogement;
