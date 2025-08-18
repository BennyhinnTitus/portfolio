import { FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import C from "../utils/c-lang.png";

export const programmingLanguages = [
  { name: "Python", icon: <FaPython color="rgb(114, 39, 200)" size={23} /> },
  { name: "Java", icon: <FaJava color="rgb(114, 39, 200)" size={25} /> },
  { name: "HTML", icon: <FaHtml5 color="rgb(114, 39, 200)" size={25} /> },
  { name: "CSS", icon: <FaCss3Alt color="rgb(114, 39, 200)" size={25} /> },
  { name: "JavaScript", icon: <RiJavascriptFill color="rgb(114, 39, 200)" size={25} /> },
  { name: "C", icon: <img className="c" src={C} alt="C" /> },
];
