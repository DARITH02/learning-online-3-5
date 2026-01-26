import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/data";

const Detail = () => {
  const { id } = useParams();
  console.log(typeof id);

  //   const finding = courses.find((e) => e.id === Number(id));
  const finding = courses.find((e) => e.id == id);
  console.log(finding);

  return (
    <div>
      {finding["title"]} || {finding["instructor"]}
    </div>
  );
};

export default Detail;
