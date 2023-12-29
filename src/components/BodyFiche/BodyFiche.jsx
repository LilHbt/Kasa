import React from "react";
import Dropdown from "../Dropdown/dropdown";
import "./BodyFiche.scss";

function BodyFiche(props) {
  const { data } = props;
  const ratings = [1, 2, 3, 4, 5];
  const rate = ratings.filter((ratings) => ratings <= data.rating);

  return (
    <div>
      <div className="agencement">
        <div className="styling">
          <div className="appartement">
            <div className="appartement--title">{data.title}</div>
            <div className="appartment--location">{data.location}</div>
          </div>
          <div className="tags">
            {data.tags.map((tags) => (
              <div key={tags} className="tag">
                {tags}
              </div>
            ))}
          </div>
        </div>
        <div className="styling-host">
          <div className="host">
            <div className="host--name">{data.host.name}</div>
            <img
              src={data.host.picture}
              alt="Hôte de la location"
              className="host--pic"
            />
          </div>
          <div className="rating">
            <div>
              {rate.map((rate) => (
                <i className="fa-solid fa-star rate"></i>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown title="Description" data={data} />

        <Dropdown title="Equipements" key={data.id} data={data.equipments} />
      </div>
    </div>
  );
}

export default BodyFiche;
