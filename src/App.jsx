import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";
import toast from "react-hot-toast";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (err) {
      toast.error("Network error", {
        position: "bottom-right",
      });
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>
      <div className="mt-[80px]">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
      </div>
    </div>
  );
};

export default App;
