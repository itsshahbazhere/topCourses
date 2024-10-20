import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import toast from "react-hot-toast";

const card = (props) => {
  let course = props.course;
  let likedCoures = props.likedCoures;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    //logic
    if (likedCoures.includes(course.id)) {
      ///pahle se like hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.success("Liked Removed", {
        position: "bottom-right",
      });
    } else {
      //else meand like nhi hai
      if (likedCoures.length == 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully", {
        position: "bottom-right",
      });
    }
  }

  return (
    <div className="w-[300px] rounded-md bg-gray-600 relative">
      <div className="relative">
        <img src={course.image.url} alt={course.title} className="rounded-t-md" />

        <button
          className="absolute bottom-[-10px] right-2 bg-white rounded-full p-2"
          onClick={clickHandler}
        >
          {likedCoures.includes(course.id) ? (
            <FcLike className="text-2xl" />
          ) : (
            <FcLikePlaceholder className="text-2xl" />
          )}
        </button>
      </div>

      <div className="mt-2 p-4">
        <p className="text-lg text-blue-500 font-bold">{course.title}</p>
        <p className="text-sm">
          {course.description.length > 100
            ? course.description.substr(0, 150)+ "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default card;
