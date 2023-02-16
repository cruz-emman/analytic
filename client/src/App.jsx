import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from './pages/index'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Demographic from './pages/Demographic'
import InteractionOfStudents from './pages/InteractionOfStudents'
import UsageTLCTeachers from './pages/UsageTLCTeachers'
import Gadgets from './pages/gadgets/Gadgets'
import {FirstYear, SecondYear, ThirdYear, FourthYear} from './pages/years/index'
import MobileGadget from './pages/gadgets/MobileGadget'
import DesktopGadget from './pages/gadgets/DesktopGadget'
import ActivityOfStudents from './pages/ActivityOfStudents'
import EnrollmentLwsis from './pages/EnrollmentLwsis'
import CSVFilesPage from './pages/CSVFilesPage';
import Assign from './pages/activities/Assign';
import Book from './pages/activities/Book';
import Chat from './pages/activities/Chat';
import Choice from './pages/activities/Choice';
import Forum from './pages/activities/Forum';
import Label from './pages/activities/Label';
import Resource from './pages/activities/Resource';
import Page from './pages/activities/Page';
import Url from './pages/activities/Url';
const App = () =>{
    return (
        <div className='flex flex-col '>
          <Navbar />
            <BrowserRouter>
              <div className='flex flex-row gap-2'>
                <div className='flex-[.5]'>
                    <Sidebar />
                </div>
                <div className='flex-[2] bg-slate-100'>
                    <Routes>
                      <Route path="/">
                        <Route index element={<Home />} />

                        {/* Uploaded CSV */}

                        <Route path="CsvFiles">
                          <Route index element={<CSVFilesPage />} />
                        </Route>
                      
                        
                        {/* Demographic Route */}
                        <Route path="demographic" >
                          <Route index element={<Demographic />} />
                          <Route path="FirstYear" element={<FirstYear />} />
                          <Route path="SecondYear" element={<SecondYear />} />
                          <Route path="ThirdYear" element={<ThirdYear />} />
                          <Route path="FourthYear" element={<FourthYear />} />

                        </Route>

                        {/* UsageTLC */}
                        <Route path="UsageTLCTeachers">
                            <Route index element={<UsageTLCTeachers />} />
                            <Route path="assignment" element={<Assign />} />
                            <Route path="book" element={<Book />} />
                            <Route path="chat" element={<Chat />} />
                            <Route path="choice" element={<Choice />} />
                            <Route path="forum" element={<Forum />} />
                            <Route path="label" element={<Label />} />
                            <Route path="page" element={<Page />} />
                            <Route path="url" element={<Url />} />
                            <Route path="resources" element={<Resource />} />
                        </Route>

                        {/* InteractionStudents */}

                        <Route path="InteractionStudents">
                          <Route index element={<InteractionOfStudents />} />
                        </Route>
                        
                        {/* Activity Students */}
                        <Route path="ActivityStudents">
                          <Route index element={<ActivityOfStudents />} />
                        </Route>

                        {/* Enrollment Of Lwsis */}
                        <Route path="EnrollmentLwsis">
                          <Route index element={<EnrollmentLwsis />} />
                        </Route>

                          {/* Gadget Routes */}
                        <Route path="Gadgets">
                          <Route index  element={<Gadgets />} />
                          <Route path="Mobile" element={<MobileGadget />} />
                          <Route path="Desktop" element={<DesktopGadget />} />
                        </Route> 
                   
                      </Route>
                    </Routes>
                </div>
              </div>
              <ToastContainer />
            </BrowserRouter>
        </div>
    )
}

export default App