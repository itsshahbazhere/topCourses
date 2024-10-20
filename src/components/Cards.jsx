import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  const [likedCoures, setLikedCourses] = useState([]);

  let category = props.category;
  const courses = props.courses;

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    }
    else{
        //passing data of specigic array or catagory
        return courses[category]
    }
  }

  return (
    <div className="flex flex-wrap gap-4 mb-4 justify-center">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCoures={likedCoures}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
