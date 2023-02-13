import React, {useState} from 'react';
import {ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Modal, Box} from '@mui/material'
import {MdOutlineExpandLess,MdOutlineExpandMore,MdMale,MdFemale, MdPeopleAlt, MdOutlineHouseSiding, MdOutlineDashboard} from 'react-icons/md'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {AiFillMobile} from 'react-icons/ai'
import {GrCloudComputer, GrPersonalComputer} from 'react-icons/gr'
import {RxActivityLog} from 'react-icons/rx'
import {FaFileCsv} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



const Sidebar = () => {
   //Demograpghy
  const [demographic, setDemographic] = useState(false);
  const handleOpenDemographic = () =>{
    setDemographic(!demographic)
  }

  //Activity
    const [activity, setActivity] = useState(false);
    const handleOpenActivity = () =>{
      setActivity(!activity)
  } 


  //Interaction
  const [interaction, setInteraction] = useState(false);
    const handleOpenInteraction = () =>{
      setInteraction(!interaction)
  } 

  //Enrollment
  const [enrollmemt, setEnrollment] = useState(false);
  const handleOpenEnrollment = () =>{
    setEnrollment(!enrollmemt)
  }

  //Usage
  const [usage, setUsage] = useState(false);
  const handleOpenUsage = () =>{
    setUsage(!usage)
  }
  
 //List of Gadget
  const [gadget, setGadget] = useState(false);
  const handleOpenGadget = () =>{
    setGadget(!gadget)
  }

  //Handle Modal
  const [csvModal, setCsvModal] = useState(false);
  const handleModalOpen = () => {
    setCsvModal(true);
  };
  const handleModalClose = () => {
    setCsvModal(false);
    };


  //Handle CSV Upload
  const [data, setData] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', data);
    try {
        await axios.post('http://localhost:5000/api/v1/upload',formData)
        console.log("Successfully uploaded")
    } catch (error) {
        console.log("Error", {message:error})
    }
}

  return (
    <div className=' w-full h-full min-h-screen shadow-xl p-4 '>
        <div className='flex flex-col'>

          <List
              dense
               sx={{ width: '100%', maxWidth: 360, }}
               component="nav"
               aria-labelledby="nested-list-subheader"
               subheader={
                 <ListSubheader component="div" id="nested-list-subheader">
                   Dashboard
                 </ListSubheader>
               }
            >
              <Link to="/">
                <ListItemButton>
                    <ListItemIcon>
                      <MdOutlineDashboard />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
              </Link>
              
            </List >

            <List
              dense
               sx={{ width: '100%', maxWidth: 360, }}
               component="nav"
               aria-labelledby="nested-list-subheader"
               subheader={
                 <ListSubheader component="div" id="nested-list-subheader">
                   Uploads
                 </ListSubheader>
               }
            >
              {/* onClick={handleModalOpen} */}
              <Link to="/CsvFiles">
                <ListItemButton >
                  <ListItemIcon>
                    <FaFileCsv />
                  </ListItemIcon>
                  <ListItemText primary="Uploaded CSV" />
                </ListItemButton>
              </Link>
              
                    {/* <Modal
                      open={csvModal}
                      onClose={handleModalClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                      >
                      <Box sx={{ ...style, width: 400, height: 200 }}>
                          <h2 className='text-2xl pb-6 font-semibold text-gray-300' id="parent-modal-title">Upload CSV file</h2>
                            <form onSubmit={handleSubmit} className='flex flex-col items-center  gap-5 justify-start'>
                              <input type="file" onChange={(e) => setData(e.target.files[0])}  name="myFile" />
                              <button className='w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg text-xl font-semibold text-white stroke-black shadow-lg	' type="submit" value="Upload a file"> Upload CSV </button>
                            </form>
                      </Box>
                    </Modal> */}
            </List>

            <List
              dense
               sx={{ width: '100%', maxWidth: 360,  }}
               component="nav"
               aria-labelledby="nested-list-subheader"
               subheader={
                 <ListSubheader component="div" id="nested-list-subheader">
                  Summary
                 </ListSubheader>
               }
            >

              {/* DEMOGRAPHIC PROFILE */}
              {/* Number of students, male, and female, 1st year, to fourth */}

              <Link to="/demographic">
              <ListItemButton onClick={handleOpenDemographic}>
                <ListItemIcon>
                  <MdPeopleAlt />
                </ListItemIcon>
                <ListItemText primary="Demographic profile of students" />
                {demographic ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
              </ListItemButton>
              </Link>

              <Collapse in={demographic} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <Link to="demographic/FirstYear">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="1st Year" />
                    </ListItemButton>
                  </Link>
                  
                  <Link to="demographic/SecondYear">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="2nd Year" />
                    </ListItemButton>
                  </Link>
                  

                  <Link to="demographic/ThirdYear">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="3rd Year" />
                    </ListItemButton>
                  </Link>
                    

                  <Link to="demographic/FourthYear">
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="4th Year" />
                  </ListItemButton>

                    </Link>
                  
                </List>
              </Collapse> 


                {/* USAGE  */}
              <Link to="/UsageTLCTeachers">
                <ListItemButton onClick={handleOpenUsage}>
                  <ListItemIcon>
                    <FaChalkboardTeacher />
                  </ListItemIcon>
                  <ListItemText primary="Usage of Teachers (TLC)" />
                  {usage ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                </ListItemButton>
              </Link>

              <Collapse in={usage} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="College" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Interecton pf Students no need for drop down button */}
               <Link to="/InteractionStudents">
                <ListItemButton onClick={handleOpenInteraction}>
                    <ListItemIcon>
                      <FaChalkboardTeacher />
                    </ListItemIcon>
                  <ListItemText primary="Interaction of students" />
                </ListItemButton>
               </Link>
              
              

              {/* Interecton pf activites no need for drop down button */}
              <Link to="/ActivityStudents">
                <ListItemButton onClick={handleOpenActivity}>
                  <ListItemIcon>
                    <RxActivityLog />
                  </ListItemIcon>
                  <ListItemText primary="Activity of students" />
                </ListItemButton>
               </Link>
              
              

              {/* Enrollment Lwsis */}
              <Link to="/EnrollmentLwsis">
              <ListItemButton onClick={handleOpenEnrollment}>
                <ListItemIcon>
                  <MdOutlineHouseSiding />
                </ListItemIcon>
                <ListItemText primary="Enrollment of LWSIS" />
                {enrollmemt ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
              </ListItemButton>
              </Link>
              <Collapse in={enrollmemt} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="College" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* List of Gadgets Lwsis */}
              <Link to="/Gadgets">
                <ListItemButton onClick={handleOpenGadget}>
                  <ListItemIcon>
                    <GrCloudComputer />
                  </ListItemIcon>
                  <ListItemText primary="List of Gadgets" />
                  {gadget ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                </ListItemButton>
              </Link>
              
              <Collapse in={gadget} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/Gadgets/Mobile">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                      <AiFillMobile />
                      </ListItemIcon>
                      <ListItemText primary="Mobile" />
                    </ListItemButton>
                  </Link>
                  
                  <Link to="/Gadgets/Desktop">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <GrPersonalComputer />
                      </ListItemIcon>
                      <ListItemText primary="Desktop" />
                    </ListItemButton>
                  </Link>

                </List>
              </Collapse>

            </List>


            <List
              dense
               sx={{ width: '100%', maxWidth: 360, }}
               component="nav"
               aria-labelledby="nested-list-subheader"
               subheader={
                 <ListSubheader component="div" id="nested-list-subheader">
                   Data Analytics
                 </ListSubheader>
               }
            >
              <Link to="/">
                <ListItemButton>
                    <ListItemIcon>
                      <MdOutlineDashboard />
                    </ListItemIcon>
                    <ListItemText primary="Forecasting Usage" />
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemIcon>
                      <MdOutlineDashboard />
                    </ListItemIcon>
                    <ListItemText primary="Forecasting Analytics" />
                  </ListItemButton>
              </Link>
              
            </List >
            

            
        </div>
    </div>
  )
}

export default Sidebar