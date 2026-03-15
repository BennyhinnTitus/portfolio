import { FaPython, FaJava, FaReact, FaDatabase, FaCode, FaLightbulb, FaNetworkWired, FaShieldAlt, FaWrench, FaGlobe } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiDjango, SiNodedotjs, SiExpress, SiMongodb, SiSqlite, SiPostgresql } from "react-icons/si";
import C from "../utils/c-lang.png";

export const programmingLanguages = [
  { name: "Python", icon: <FaPython color="rgb(114, 39, 200)" size={23} /> },
  { name: "Java", icon: <FaJava color="rgb(114, 39, 200)" size={25} /> },
  { name: "JavaScript", icon: <RiJavascriptFill color="rgb(114, 39, 200)" size={25} /> },
  { name: "C", icon: <img className="c" src={C} alt="C" /> },
];

export const frameworks = [
  { name: "Django", icon: <SiDjango color="rgb(114, 39, 200)" size={24} /> },
  { name: "Node.js", icon: <SiNodedotjs color="rgb(114, 39, 200)" size={24} /> },
  { name: "React", icon: <FaReact color="rgb(114, 39, 200)" size={24} /> },
  { name: "Express.js", icon: <SiExpress color="rgb(114, 39, 200)" size={24} /> },
];

export const databases = [
  { name: "SQL", icon: <FaDatabase color="rgb(114, 39, 200)" size={24} /> },
  { name: "MongoDB", icon: <SiMongodb color="rgb(114, 39, 200)" size={24} /> },
  { name: "SQLite", icon: <SiSqlite color="rgb(114, 39, 200)" size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="rgb(114, 39, 200)" size={24} /> },
];

export const technicalConcepts = [
  { name: "DSA", icon: <FaCode color="rgb(114, 39, 200)" size={24} /> },
  { name: "OOP", icon: <FaNetworkWired color="rgb(114, 39, 200)" size={24} /> },
  { name: "Problem Solving", icon: <FaLightbulb color="rgb(114, 39, 200)" size={24} /> },
  { name: "System Design", icon: <FaGlobe color="rgb(114, 39, 200)" size={24} /> },
];

export const cybersecurityTools = [
  { name: "Nmap", icon: <FaNetworkWired color="rgb(114, 39, 200)" size={24} /> },
  { name: "Wireshark", icon: <FaShieldAlt color="rgb(114, 39, 200)" size={24} /> },
  { name: "Metasploit", icon: <FaShieldAlt color="rgb(114, 39, 200)" size={24} /> },
  { name: "Burp Suite", icon: <FaWrench color="rgb(114, 39, 200)" size={24} /> },
];
