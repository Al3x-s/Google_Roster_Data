import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  ////Student and Staff list/////
  let peopleList = [
    {
      name: "Christopher Bonifacio",
      pronoun: "He/His",
      school: "Orchard Collegiate Academy",
      grad: "2022",
      color: "Blue",
      media: "Instagram",
      git: "https://github.com/Sillver-Eagle?tab=repositories"
    },
    {
      name: "Mahdiya	Chowdhury",
      pronoun: "She/Hers",
      school: "TYWLS",
      grad: "2023",
      color: "Blue",
      media: "Instagram",
      git: ""
    },
    {
      name: "Mikkail Allen",
      pronoun: "He/His",
      school: "Williamsburg Charter High School",
      grad: "2022",
      color: "Blue",
      media: "TikTOk",
      git: "https://github.com/Mikkail04?tab=repositories"
    },
    {
      name: "Justin Apupalo",
      pronoun: "He/His",
      school: "NYIT",
      grad: "2025",
      color: "Blue",
      media: "Instagram",
      git: "https://github.com/J-a-crypto?tab=repositories"
    },
    {
      name: "Angel Compoverde",
      pronoun: "He/His",
      school: "Christo Rey High School",
      grad: "2022",
      color: "Purple",
      media: "Instagram",
      git: "https://github.com/ACampoverde2099?tab=repositories"
    },
    {
      name: "Diego Cruz",
      pronoun: "He/His",
      school: "Macalester",
      grad: "2026",
      color: "Red",
      media: "Instagram",
      git: "https://github.com/dacruz2021?tab=repositories"
    },
    {
      name: "Heber C Hernandez",
      pronoun: "He/His",
      school: "John Jay HS",
      grad: "2023",
      color: "Green",
      media: "TikTok",
      git: "https://github.com/hebercruz384?tab=repositories"
    },
    {
      name: "Yonatan De La Mora",
      pronoun: "He/His",
      school: "NA",
      grad: "NA",
      color: "Na",
      media: "NA",
      git: ""
    },
    {
      name: "Denny Fernandez",
      pronoun: "He/His",
      school: "Williamsburg Charter HS",
      grad: "2022",
      color: "Blue",
      media: "Tiktok",
      git: "https://github.com/Denny29?tab=repositories"
    },
    {
      name: "Athziri Garcia",
      pronoun: "She/Hers",
      school: "Christo Rey",
      grad: "2022",
      color: "Blue",
      media: "Instagram",
      git: ""
    },
    {
      name: "Yasir Hirsi",
      pronoun: "He/His",
      school: "Mather High School",
      grad: "2022",
      color: "Red",
      media: "Instagram",
      git: ""
    },
    {
      name: "Francelys Lomeli",
      pronoun: "She/Hers",
      school: "Lindblom",
      grad: "2022",
      color: "Yellow",
      media: "TikTok",
      git: "https://github.com/francelys1848?tab=repositories"
    },
    {
      name: "Claudia Luna-Marcelino",
      pronoun: "She/Hers",
      school: "P-Tech",
      grad: "2022",
      color: "NA",
      media: "NA",
      git: "https://github.com/Luna9804?tab=repositories"
    },
    {
      name: "Wanna Marzia",
      pronoun: "She/Hers",
      school: "P-Tech",
      grad: "2022",
      color: "Black",
      media: "None",
      git: ""
    },
    {
      name: "Lily Manchala",
      pronoun: "She/Hers",
      school: "HHSLT",
      grad: "2022",
      color: "Purple",
      media: "Instagram",
      git: "https://github.com/lminchala?tab=repositories"
    },
    {
      name: "Abdulwahab Murshed",
      pronoun: "He/His",
      school: "Brooklyn College",
      grad: "2025",
      color: "Blue",
      media: "TikTok",
      git: "https://github.com/fgghvyuy?tab=repositories"
    },
    {
      name: "Andy Rincon",
      pronoun: "He/His",
      school: "Uncommon Leadership HS",
      grad: "2022",
      color: "Green",
      media: "Instagram",
      git: "https://github.com/AndyRincon?tab=repositories"
    },
    {
      name: "Eric Salazar",
      pronoun: "He/His",
      school: "WCHS",
      grad: "2022",
      color: "Blue",
      media: "TikTok",
      git: "https://github.com/EricS2004?tab=repositories"
    },
    {
      name: "Alejandro Sanchez",
      pronoun: "He/His",
      school: "UIC",
      grad: "2025",
      color: "Black",
      media: "Instagram",
      git: "https://github.com/Al3x-s?tab=repositories"
    },
    {
      name: "Itzel Sanchez",
      pronoun: "She/Her",
      school: "WestingHouse",
      grad: "2022",
      color: "purple",
      media: "TikTok",
      git: "https://github.com/Itzelsanchezz?tab=repositories"
    },
    {
      name: "Anton Schuster",
      pronoun: "He/His",
      school: "Latin School Of Chicago",
      grad: "2023",
      color: "Orange",
      media: "Instagram",
      git: "https://github.com/a-k-s?tab=repositories"
    },
    {
      name: "Angel Smythe",
      pronoun: "He/His",
      school: "NA",
      grad: "NA",
      color: "Na",
      media: "Na",
      git: ""
    },
    {
      name: "Imani Taylor",
      pronoun: "She/Hers",
      school: "P-Tech",
      grad: "2022",
      color: "Pink",
      media: "TikTOk",
      git: "https://github.com/ImaniT16?tab=repositories"
    },
    {
      name: "Issac Teoh",
      pronoun: "He/His",
      school: "Queeens Technical HS",
      grad: "2022",
      color: "Blue",
      media: "Instagram",
      git: "https://github.com/bluetimer?tab=repositories"
    },
    {
      name: "David Vital",
      pronoun: "He/His",
      school: "NA",
      grad: "NA",
      color: "NA",
      media: "NA",
      git: "https://github.com/dvital1903?tab=repositories"
    },
    {
      name: "Desean Blackburn",
      pronoun: "He/His",
      school: "NA",
      grad: "2022",
      color: "Green",
      media: "Instagram",
      git: "https://github.com/DeseanOrBusta?tab=repositories"
    },
    {
      name: "Chinaza Onwukanjo",
      pronoun: "She/Hers",
      school: "NA",
      grad: "2023",
      color: "Purple",
      media: "Youtube",
      git: "https://github.com/DeseanOrBusta?tab=repositories"
    }
  ];
  let stafflist = [
    {
      name: "Mika Salazar",
      pos: "Program manager",
      pronoun: "NA",
      color: "",
      media: ""
    },
    {
      name: "Joe Tessler",
      pos: "Emp",
      pronoun: "Na",
      color: "NA",
      media: "NA"
    },
    {
      name: "Faran Jessani",
      pos: "NA",
      pronoun: "Na",
      color: "NA",
      media: "NA"
    },
    {
      name: "Matt Wojcieszek",
      pos: "NA",
      pronoun: "Na",
      color: "NA",
      media: "NA"
    },
    {
      name: "Nicki Anselmo",
      pos: "NA",
      pronoun: "Na",
      color: "NA",
      media: "NA"
    },
    {
      name: "Jared Hirsch",
      pos: "NA",
      pronoun: "Na",
      color: "NA",
      media: "NA"
    }
  ];
  ////////////////for displaying popup box/////////////
  // const [isOpen, setIsOpen] = useState(true);
  ////////////////for displaying alert box//////////
  const [alertOpen, setAlertOpen] = useState(true);

  //////////////////////////
  let dispPeople = displayPersonBar(peopleList);
  let displayStaff = displayStaffBar(stafflist);
  let provstaffinf = provideStaffInfo(stafflist);
  return (
    <div className="App">
      <div className="titleContainer">
        <div className="google">
          <h1 style={{ color: "#4285F4" }}>G</h1>
          <h1 style={{ color: "#DB4437" }}>O</h1>
          <h1 style={{ color: "#F4B400" }}>O</h1>
          <h1 style={{ color: "#0F9D58" }}>G</h1>
          <h1 style={{ color: "#4285F4" }}>L</h1>
          <h1 style={{ color: "#DB4437" }}>E</h1>
        </div>
        <h1 className="whitespace"> </h1>
        <h1 className="mainTitle">FLWII Class Roster Data</h1>
      </div>
      <h1 className="title">Student Section</h1>
      {alertOpen ? (
        <div className="alert">
          <span className="closebtn" onClick={() => setAlertOpen(false)}>
            &times;
          </span>
          Click the student profiles to look at github
          <br></br>
          Click on the staff profiles for more information
        </div>
      ) : null}
      {dispPeople}
      <h1 className="title button"> Staff Section </h1>
      {displayStaff}
      {/*{provstaffinf}    use this to diplay staff cards*/}
    </div>
  );
}
///////Display Student Funtion////////
function displayPersonBar(peopleList) {
  return (
    <div className="canv">
      {peopleList.map((person) => (
        <a className="cellDecoration" href={person.git} target="_blank_">
          <tr
            style={{ borderColor: person["color"] }}
            className="studentInfo studentCell"
          >
            <td>Name: {person["name"]}</td>
            <td>Pronouns: {person["pronoun"]}</td>
            <td>School: {person["school"]}</td>
            <td>Year: {person["grad"]}</td>
            <td>Color: {person["color"]}</td>
            <td>Media: {person["media"]}</td>
          </tr>
        </a>
      ))}
    </div>
  );
}
///Display staff function///
function displayStaffBar(stafflist) {
  return (
    <div className="canv">
      {stafflist.map((person) => (
        <a href={person.git}>
          <tr className="studentInfo staffCell">
            <td>{person["name"]}</td>
            <td>{person["pos"]}</td>
            <td>{person["pronoun"]}</td>
            <td>{person["color"]}</td>
            <td>{person["media"]}</td>
          </tr>
        </a>
      ))}
    </div>
  );
}
/////// create popup winowd on staff cell click

function provideStaffInfo(stafflist) {
  // create page cell
  return (
    <div className="popUpPage StaffPage">
      {stafflist.map((staffInfo) => (
        <div className="cellContainer">
          <div className="photo"></div>
          <div className="name">{staffInfo["name"]}</div>
          <div className="email">emailtest</div>
        </div>
      ))}
    </div>
  );
}
