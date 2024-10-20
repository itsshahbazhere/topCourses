import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className="flex  justify-center gap-6 flex-wrap m-5">
      {filterData.map((data) => (
        <div key={data.id}>
          <button
            className={`rounded-lg border-2 px-4 py-2 text-base font-medium bg-gray-900 cursor-pointer transition-colors duration-200 hover:border-[#646cff] focus:outline-[4px] focus:outline-auto focus:outline-[#1a1a1a]
            ${category === data.title ? "border-[#646cff]" : "border-transparent"}`}
            onClick={()=>filterHandler(data.title)}
          >
            {data.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filter;
