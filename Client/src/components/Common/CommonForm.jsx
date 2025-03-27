import React from "react";
import { formControls } from "@/Config/FormControl";
import { Input } from "../ui/input";
const CommonForm = () => {
  return (
    <form>
      <div className="mx-20 max-w-sm" >{formControls.map((item, index) => {

        return <div key={item.name} className="flex flex-col">
            <label className=" mb-1 "   htmlFor={item.name}>{item.label}</label>
            <Input className="" type={item.type} placeholder={item.placeholder}/>


        </div>
      })}</div>
    </form>
  );
};

export default CommonForm;
