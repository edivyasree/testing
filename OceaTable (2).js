import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function OceaTable(props) {
    const [ApiDetails, setApiDetails] = useState([])
    const [show, setShow] = useState(false);
    const [employeeId, setEmployeeId] = useState("")
    const [userName, setUserName] = useState("")
    const [plan, setPlan] = useState("")
    const [employeeType, setemployeeType] = useState("")
    const [projectCategory, setProjectCategory] = useState("")
    const [clientName, setClientName] = useState("")
    const [projectStatus, setProjectStatus] = useState("")
    const [department, setDepartment] = useState("")
    const [projectStartDate, setProjectStartDate] = useState("")
    const [projectEndDate, setProjectEndtDate] = useState("")
    const [tenure, setTenure] = useState("")
    const [ojasEmailID, setojasEmailID] = useState("")
    const [billingStatus, setbillingStatus] = useState("")
    const [billRatesPM, setbillRatesPM] = useState("")
    const [estimationOfActualBilling, setActualBilling] = useState("")
    const [mCtc, setMctc] = useState("")
    const [margin, setMargin] = useState("")
    const [yctc, setYctc] = useState("")
    const handleClose = () => setShow(false);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleCloseDelete = () => setShowDelete(false);
    const [showUpdate, setShowUpdate] = useState(false)
    const [showdelete, setShowDelete] = useState(false)
    const [deleted, setDeleted] = useState([])
    const [id, setid] = useState("")
    const [currentpage, setcurrentpage] = useState(1);
    const [postsperpage, setpostsperpage] = useState(10);
    const totalpages = Math.ceil(ApiDetails.length / postsperpage);
    const pages = [...Array(totalpages + 1).keys()].slice(1, 10)
    const indexofLastpage = currentpage * postsperpage;
    const indexofFirstPage = indexofLastpage - postsperpage;
    const [searchField, setSearchField] = useState("");
    const [CurrencyFormat, SetCurrencyFormat] = useState()
    const [suffix, setSuffix] = useState()
    const [prefix, setPrefix] = useState()
    const [thousandSeparator, setthousandSeparator] = useState(false)
    const ApiDetails1 = ApiDetails.slice(indexofFirstPage, indexofLastpage);
    useEffect(() => {
        axios.get(`http://192.168.6.114:9090/api/getAllEmployeeDetails`)
            .then(res => {
                console.log(res.data)
                setApiDetails(res.data)
            })
    }, [])
    const displaying = (e, index) => {
        setShow(true)
        ApiDetails.map((e1, i) => {
            if (i == index) {
                setUserName(e1.userName)
                setPlan(e1.plan)
                setemployeeType(e1.employeeType)
                setProjectCategory(e1.projectCategory)
                setClientName(e1.clientName)
                setProjectStatus(e1.projectStatus)
                setDepartment(e1.department)
                setProjectStartDate(e1.projectStartDate)
                setProjectEndtDate(e1.projectEndDate)
                setTenure(e1.tenure)
                setojasEmailID(e1.ojasEmailID)
                setbillingStatus(e1.billingStatus)
                setbillRatesPM(e1.billRatesPM)
                setActualBilling(e1.estimationOfActualBilling)
                setMctc(e1.mCtc)
                setYctc(e1.yctc)
                setMargin(e1.margin)
            }
        })
    }

    const update = (e) => {
        setShowUpdate(true)
        setPlan(e.plan)
        setUserName(e.userName)
        setid(e.id)
        setEmployeeId(e.employeeId)
        setemployeeType(e.employeeType)
        setProjectCategory(e.projectCategory)
        setClientName(e.clientName)
        setProjectStatus(e.projectStatus)
        setDepartment(e.department)
        setProjectStartDate(e.projectStartDate)
        setProjectEndtDate(e.projectEndDate)
        setTenure(e.tenure)
        setojasEmailID(e.ojasEmailID)
        setbillingStatus(e.billingStatus)
        setbillRatesPM(e.billRatesPM)
        setActualBilling(e.estimationOfActualBilling)
        setMctc(e.mCtc)
        setYctc(e.yctc)
        setMargin(e.margin)
    }

    console.log(mCtc + "jhkhiuoiuoiuo")
    let price = mCtc;
    const result = ('₹' + new Intl.NumberFormat('en-IN').format(price) + '.00')
    let price1 = yctc;
    const result1 = ('₹' + new Intl.NumberFormat('en-IN').format(price1) + '.00')
    let price2 = margin
    const result2 = ('₹' + new Intl.NumberFormat('en-IN').format(price2) + '.00')
    console.log(result + "result");
    let price3 = billRatesPM
    const result3 = ('₹' + new Intl.NumberFormat('en-IN').format(price3) + '.00')
    let price4 = estimationOfActualBilling
    const result4 = ('₹' + new Intl.NumberFormat('en-IN').format(price4) + '.00')




    const handleUpdate = () => {
        const obj = {
            id: id,
            employeeId: employeeId,
            userName: userName,
            plan: plan,
            employeeType: employeeType,
            projectCategory: projectCategory,
            clientName: clientName,
            projectStatus: projectStatus,
            department: department,
            projectStartDate: projectStartDate,
            projectEndDate: projectEndDate,
            tenure: tenure,
            ojasEmailID: ojasEmailID,
            billingStatus: billingStatus,
            billRatesPM: billRatesPM,
            estimationOfActualBilling: estimationOfActualBilling,
            mCtc: mCtc,
            margin: margin,
            yctc: yctc
        }
        console.log(obj, "updated object")
        axios.put(`http://192.168.6.114:9090/api/updateEmployee`, obj)
            .then(res => console.log(res.data))
    }
    const clickedDelete = (employeeId, f) => {
        setShowDelete(true)
        setEmployeeId(employeeId)


        axios.delete(`http://192.168.6.114:9090/api/deleteEmployeeByEmployeeId/${employeeId}`).then(res => {
            setDeleted(res.data)
            console.log(res.data);

        })
        setDeleted(ApiDetails.filter((e) => e.employeeId !== employeeId))
    }
    const prevpage = () => {
        if (currentpage !== 1) {
            setcurrentpage(currentpage - 1);
        }
    };
    const nexthandle = () => {
        if (currentpage !== totalpages) {
            setcurrentpage(currentpage + 1);
        }
    }
    const handleDelete = () => {
        setApiDetails(ApiDetails.filter((e) => e.employeeId !== employeeId))
        handleCloseDelete()
    }
    const handleChange = e => {
        setSearchField(e.target.value);
    };

    const filtered = !searchField
        ? ApiDetails1
        : ApiDetails1.filter((person) =>
            person.employeeId.toLowerCase().includes(searchField.toLowerCase()) ||
            person.userName.toLowerCase().includes(searchField.toLowerCase()) ||
            person.clientName.toLowerCase().includes(searchField.toLowerCase())
        );

    return (
        <div>
            <main id="main" className="main">
                <section className="section" style={{ minHeight: "480px" }}>
                    <h2>Employee<span></span> Details</h2>
                  {/* <span>  <form class="form-inline">
                        <div className="pa2">
                            <input
                                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                                type="search"
                                placeholder="Search People"
                                onChange={handleChange}
                            />
                        </div>
                    </form></span> */}
                    <table className='table header-fixed' >
                        <thead>
                            <tr >
                                <th >EmployeeId</th>
                                <th >UserName</th>
                                <th >ClientName</th>
                                <th >Actions </th>
                            </tr>    </thead>       <tbody>

                            {
                                filtered.map((e, index) => (
                                    <tr key={index}>
                                        <td onMouseOver={() => displaying(e, index)}>
                                            <a href='#'> {e.employeeId}</a>
                                        </td>
                                        <td>{e.userName}</td>
                                        <td>{e.clientName}</td>
                                        <td><button type="button" class="btn btn-outline-primary btn-sm" onClick={() => update(e, index)}>Update </button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" class="btn btn-outline-primary btn-sm" onClick={(f) => clickedDelete(e.employeeId, f)}> Delete</button>
                                        </td>
                                    </tr>))}
                        </tbody>
                    </table>
                    <Modal show={showdelete} onHide={handleCloseDelete}>
                        <Modal.Header >
                            <Modal.Title>Delete Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><div className="alert alert-danger">Are you sure you want to delete record where employeeId="{employeeId}" ?</div></Modal.Body>
                        <Modal.Footer>
                            <Button variant="default" onClick={handleCloseDelete}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    <div className='pagination' style={{ textAlign: "text-end" }}>
                        <span onClick={prevpage}>Prev</span>                        {
                            pages.map((e) => (
                                <span onClick={() => setcurrentpage(e)} >
                                    {`${e} |`}

                                </span>))}

                        <span onClick={nexthandle}>Next</span>
                    </div>                    <div>
                        <Modal className="modal-lg" {...props}
                            show={show}
                            onHide={handleClose}
                            backdrop="static" keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>View Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <Container>


                                        <Row>
                                            <Col xs={4} md={4}>
                                                <ul>
                                                    <label className="form-label">Employee Id</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Employee Id" value={employeeId}
                                                        onChange={(e) => setEmployeeId(e.target.value)}

                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">User Name</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={userName}
                                                        onChange={(e) => setUserName(e.target.value)}
                                                        placeholder="User Name" required autoComplete="off" />
                                                </ul>
                                                <ul>    <label className="form-label">Plan</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Plan" value={plan}
                                                        onChange={(e) => setPlan(e.target.value)}
                                                        required autoComplete="off" /> </ul>
                                                <ul> <label className="form-label">Employee Type</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={employeeType}
                                                        onChange={(e) => setemployeeType(e.target.value)}
                                                        placeholder="Employee Type" required autoComplete="off" /></ul>
                                                <ul> <label className="form-label">Project Category</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Project Category" value={projectCategory}
                                                        onChange={(e) => setProjectCategory(e.target.value)}
                                                        required autoComplete="off" /></ul>
                                                <ul>
                                                    <label className="form-label">Client Name</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={clientName}
                                                        onChange={(e) => setClientName(e.target.value)}
                                                        placeholder="Client Name" required autoComplete="off" />
                                                </ul>                                            </Col>
                                            <Col xs={4} md={4}>                                                <ul>
                                                <label className="form-label">Project Status</label>
                                                <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Project status" value={projectStatus}
                                                    onChange={(e) => setProjectStatus(e.target.value)}
                                                    required autoComplete="off" />
                                            </ul>
                                                <ul>
                                                    <label className="form-label">Department</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={department}
                                                        onChange={(e) => setDepartment(e.target.value)}
                                                        placeholder="Department" required autoComplete="off" />
                                                </ul>          <ul>
                                                    <label className="form-label">Project Start Date</label>
                                                    <input type="text" className="form-control" placeholder="Project Start Date" value={projectStartDate}
                                                        onChange={(e) => setProjectStartDate(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">Project End Date</label>
                                                    <input type="text" className="form-control" value={projectEndDate}
                                                        onChange={(e) => setProjectEndtDate(e.target.value)}
                                                        placeholder="Project EndDate" required autoComplete="off" />
                                                </ul>                                                <ul>
                                                    <label className="form-label">Tenure</label>
                                                    <input type="text" className="form-control" value={tenure}
                                                        onChange={(e) => setTenure(e.target.value)}
                                                        placeholder="Tenure" required autoComplete="off" />
                                                </ul>                                                <ul>
                                                    <label className="form-label">Ojas Email-id</label>
                                                    <input type="email" className="form-control" value={ojasEmailID}
                                                        onChange={(e) => setojasEmailID(e.target.value)}
                                                        placeholder="Ojas Email-id" required autoComplete="off" />
                                                </ul>                                            </Col>
                                            <Col xs={4} md={4}>                                                <ul>
                                                <label className="form-label">Billing Status</label>
                                                <input type="text" className="form-control" placeholder="Billing Status" value={billingStatus}
                                                    onChange={(e) => setbillingStatus(e.target.value)}
                                                    required autoComplete="off" />
                                            </ul>                                                <ul>

                                                    <label className="form-label">Billing Rates PM</label>

                                                    <input type="text" className="form-control" placeholder="Billing Status" value={result3}
                                                        onChange={(e) => setbillRatesPM(e.target.value)}
                                                        required autoComplete="off" />

                                                </ul>                                                <ul>
                                                    <label className="form-label">Estimation of Actual Billing</label>

                                                    <input type="text" className="form-control" placeholder="Billing Status" value={result4}
                                                        onChange={(e) => setActualBilling(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>                                                <ul>
                                                    <label className="form-label">M CTC</label>

                                                    <input type="text" className="form-control" placeholder="Billing Status" value={result}
                                                        onChange={(e) => setMctc(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">Margin</label>

                                                    <input type="text" className="form-control" placeholder="Margin" value={result2}
                                                        onChange={(e) => setMargin(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>

                                                    <label className="form-label">Y CTC</label>

                                                    <input type="text" className="form-control" placeholder="Margin" value={result1}
                                                        onChange={(e) => setYctc(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                            </Col>
                                        </Row>

                                    </Container>
                                </form>
                            </Modal.Body>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>       
                                                     </div>                    
                                                         </Modal>               
                                                              </div>
                    <div className='container-lg'>
                        <Modal className="modal-lg" {...props} aria-labelledby="contained-modal-title-vcenter" show={showUpdate}
                            onHide={handleCloseUpdate}
                            backdrop="static" keyboard={false}>  <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter"> Update Employee Details   </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="show-grid">
                                <form>
                                    <Container>
                                        <Row>
                                            <Col xs={4} md={4}>
                                                <ul>
                                                    <label className="form-label">Employee Id</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Employee Id" value={employeeId}
                                                        onChange={(e) => setEmployeeId(e.target.value)}
                                                        required autoComplete="off" />

                                                </ul>                                                <ul>
                                                    <label className="form-label">User Name</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={userName}
                                                        onChange={(e) => setUserName(e.target.value)}

                                                        placeholder="User Name" required autoComplete="off" />
                                                </ul>                                                <ul> <label className="form-label">Plan</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Plan" value={plan}
                                                        onChange={(e) => setPlan(e.target.value)}
                                                        required autoComplete="off" /> </ul>
                                                <ul> <label className="form-label">Employee Type</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={employeeType}
                                                        onChange={(e) => setemployeeType(e.target.value)}
                                                        placeholder="Employee Type" required autoComplete="off" /></ul>
                                                <ul> <label className="form-label">Project Category</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Project Category" value={projectCategory}
                                                        onChange={(e) => setProjectCategory(e.target.value)}
                                                        required autoComplete="off" /></ul>
                                                <ul>
                                                    <label className="form-label">Client Name</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={clientName}
                                                        onChange={(e) => setClientName(e.target.value)}
                                                        placeholder="Client Name" required autoComplete="off" />
                                                </ul>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <ul>
                                                    <label className="form-label">Project Status</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" placeholder="Project status" value={projectStatus}
                                                        onChange={(e) => setProjectStatus(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>                                                <ul>
                                                    <label className="form-label">Department</label>
                                                    <input type="/^[A-Za-z\s]*$/" className="form-control" value={department}
                                                        onChange={(e) => setDepartment(e.target.value)}
                                                        placeholder="Department" required autoComplete="off" />
                                                </ul>                                                <ul>                                                  
                                                      <label className="form-label">Project Start Date</label>
                                                    <input type="text" className="form-control" placeholder="Project Start Date" value={projectStartDate}
                                                        onChange={(e) => setProjectStartDate(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">Project End Date</label>
                                                    <input type="text" className="form-control" value={projectEndDate}
                                                        onChange={(e) => setProjectEndtDate(e.target.value)}
                                                        placeholder="Project EndDate" required autoComplete="off" />
                                                </ul>                                                <ul>                                                    
                                                    <label className="form-label">Tenure</label>                                                  
                                                      <input type="text" className="form-control" value={tenure}
                                                    onChange={(e) => setTenure(e.target.value)}
                                                    placeholder="Tenure" required autoComplete="off" />
                                                </ul>                                                <ul>
                                                    <label className="form-label">Ojas Email-id</label>
                                                    <input type="email" className="form-control" value={ojasEmailID}
                                                        onChange={(e) => setojasEmailID(e.target.value)}
                                                        placeholder="Ojas Email-id" required autoComplete="off" />
                                                </ul>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <ul>
                                                    <label className="form-label">Billing Status</label>
                                                    <input type="text" className="form-control" placeholder="Billing Status" value={billingStatus}
                                                        onChange={(e) => setbillingStatus(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">Billing Rates PM</label>
                                                    <input type="text" className="form-control" placeholder="Billing Status" value={result3}
                                                        onChange={(e) => setbillRatesPM(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">Estimation of Actual Billing</label>
                                                    <input type="text" className="form-control" placeholder="Billing Status" value={result4}
                                                        onChange={(e) => setActualBilling(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>


                                                    <label className="form-label">M CTC</label>
                                                    <input type="text" className="form-control" placeholder="Billing Status" value={result}
                                                        onChange={(e) => setMctc(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">Margin</label>
                                                    <input type="text" className="form-control" placeholder="Margin" value={result2}
                                                        onChange={(e) => setMargin(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                                <ul>
                                                    <label className="form-label">Y CTC</label>
                                                    <input type="text" className="form-control" placeholder="Margin" value={result1}
                                                        onChange={(e) => setYctc(e.target.value)}
                                                        required autoComplete="off" />
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Container>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>

                                <div class="modal-footer">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseUpdate} >Close</button>                                    <button type="button" class="btn btn-primary" onClick={handleUpdate}>Save changes</button>                                </div>                            </Modal.Footer>                        </Modal>                    </div>                </section>            </main>        </div>)
}
export default OceaTable