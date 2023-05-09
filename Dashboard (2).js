import React, { useEffect } from "react";
import { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { faker } from '@faker-js/faker';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
	Tooltip,
	Title,
	ArcElement,
	BarElement,
} from 'chart.js';
import axios from "axios";
import { json } from "react-router-dom";
ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
	Tooltip,
	Title,
	ArcElement,
	BarElement
)

function Dashboard({ open }) {
	const [startdate, setStartdate] = useState()
	const [endDate, setDate] = useState()
	const [operations, setOperations] = useState()
	const [flag, setflag] = useState(false)
	const [bardata, setBardata] = useState([2])
	const [piedata, setPiedata] = useState([2]);
	const [apistartDate, setapistartDate] = useState();
	const [apiendDate, setapiendDate] = useState();
	const [bardata1, setBardata1] = useState([]);
	const [xaxisKeys, setXaxisKeys] = useState();
	const [yaxisfirstObject, setyaxisfirstObject] = useState();
	const [yaxissecondObject, setyaxissecondObject] = useState();
	const [yaxisthirdObject, setyaxisthirdObject] = useState();
	const [billingStatus, setbillingStatus] = useState([]);
	const [barKeys, setBarkeys] = useState()
	const [pie1, setPie1] = useState(false)
	const [bar, setBar] = useState(false)
	const [line, setLine] = useState(false);
	const [allapis, setallapis] = useState([2]);
	const [projectCategoryViseBillables, setprojectCategoryViseBillables] = useState(false)
	const [apiurl, setApiurl] = useState()
	const [chartType, setchartType] = useState()

	useEffect(() => {
		axios.get("http://192.168.6.114:9090/api/getAllApis")
			.then((res) => {
				console.log(res.data);
				setallapis(res.data)
			})
	}, [])
	console.log(allapis);
	const getapiUrl = (e) => {
		// console.log(e.target.value + "  "+ "sss");
		// console.log(typeof e.target.value);



		let val = "http://192.168.6.114:9090" + e.target.value.split("<sd>").join('').split("/<ed>").join('') + apistartDate + "/" + apiendDate;

		console.log(val);
		axios.get(val)
			.then(res => {

				console.log(res.data, "iam response data");
				console.log(typeof res.data, res.data.chartType);
				// helias
				//console.log('------------------'+res.data.values.length);
				//console.log('------------------'+res.data[0].values[0].billing_status);
				///
				setchartType(res.data.chartType)
				let value = eval(res.data.values)
				console.log(value, typeof value);

				// console.log();
				setOperations(res.data.chartType)
				setBardata(value)
				console.log(bardata);
				
				//if(bardata.values.billing_status)
			}
			)
		// setApiurl(e.target.value)

	}
	console.log(bardata, "iam 89th line")

	// {
	// 	bardata.map(e=>(
	// 		console.log(e.monthly_ctc +"5555555555555")
	// 	))
	// }
	// console.log(bardata);

	// console.log(JSON.parse(result2));
	// console.log(result[0].margin);
	// console.log(Array.isArray(result))
	// console.log(typeof bardata +"ffffff");

	const disablePastDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		const yyyy = today.getFullYear();
		return yyyy + "-" + mm + "-" + dd;
	}
	// console.log(apistartDate, "iam start date changed")


	

	const createcolours = () => {
		let colours = [];
		for (let i = 0; i < Object.keys(piedata).length; i++) {
			let r = Math.floor(Math.random() * 200);
			let g = Math.floor(Math.random() * 200);
			let b = Math.floor(Math.random() * 200);
			let color = "rgb(" + r + ", " + g + ", " + b + ")";
			colours.push(color);
		}
		return colours;
	};



	const handleStartDate = (e) => {
		console.log(e.target.value, "start date in year formt");
		setStartdate(e.target.value);
		let value = (e.target.value).split('-')[1];

		let arr = ["Jan", "Feb", "March", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
		for (let i in arr) {
			if ((+i + 1) == value) {
				value = arr[i]
			}
		}
		let value1 = (e.target.value).split('-')[0];
		let value2 = (e.target.value).split('-')[2];
		setapistartDate(value2 + "-" + value + "-" + value1);

	}
	const handleEnddate = (e) => {
		console.log(e.target.value, "end date in year formt");
		setDate(e.target.value);
		let value = (e.target.value).split('-')[1];
		let arr = ["Jan", "Feb", "March", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
		for (let i in arr) {
			if ((+i + 1) == value) {
				value = arr[i]
			}
		}
		let value1 = (e.target.value).split('-')[0];

		let value2 = (e.target.value).split('-')[2];
		setapiendDate(value2 + "-" + value + "-" + value1)

	}
	// console.log(apistartDate, "start date");
	// console.log(apiendDate, "end date");
	const handleOperations = (e) => {
		setOperations(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		let obj3 = {
			startdate: apistartDate,
			endDate: apiendDate,
			operations: operations
		}
		console.log(obj3)
		setStartdate("")
		setDate("")
		setOperations("")
		if (operations == "Operation4") {
			setflag(true)
		} else {
			setflag(false)
		}

		if (operations == "PIE") {
			setPie1(true)
		}
		else {
			setPie1(false)
		}
		if (operations == chartType) {
			setBar(true)
		}
		else {
			setBar(false)
		}
		if (operations == "Line") {
			setLine(true)
		}
		else {
			setLine(false)
		}
		if (operations == 'projectCategoryViseBillables') {
			setprojectCategoryViseBillables(true)
		}
		else {
			setprojectCategoryViseBillables(false)
		}



		// let val = "http://192.168.6.114:9090" + apiurl.split("<sd>").join('').split("/<ed>").join('') + apistartDate + "/" + apiendDate;

		// console.log(val + "valuedata 173");





		// axios.get('http://192.168.6.114:9090/api/empMarginTypesPie/'+obj3.startdate+"/"+obj3.endDate).then((res) => {
		//  console.log(res.data.values);
		//  setPiedata(res.data.values)
		// })
		// axios.get(val).then((res) => {
		// 	console.log(res.data + "i am 189 line");
		// 	setBardata1(res.data)
		// })

	}


	// console.log(bardata1, "i am 187billable");


	const optionsbar = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
				},
			},
			datalabels: {
				display: true,
				color: "black",
				align: "end",
				anchor: "end",
				font: { size: "14" },
			},
		},
	};

	const optionsbar1 = {

		responsive: true,
		plugins: {
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
				},
			},
			datalabels: {
				display: true,
				color: "black",
				align: "end",
				anchor: "end",
				font: { size: "14" },
			},
			scales: {
				yAxes: [{
					display: true,
					stacked: true,
					ticks: {
						min: 0, // minimum value
						max: 10 // maximum value
					}
				}]
			}
		},
	};
	let data
	if (bardata.length >= 1) {
		data = {
			labels: Object.keys(bardata[0]),

			datasets: [{
				label: 'Sales ',
				data: Object.values(bardata[0]),
				backgroundColor: 'aqua',
				borderColor: 'balck',
				pointBorderColor: 'aqua',
				fill: true,
				tension: 0
			}
			]
		}
	}
	else {
		data = {
			labels: ["no data"],

			datasets: [{
				label: 'Sales of the week',
				data: ["fsfds", "wetretret"],
				backgroundColor: 'aqua',
				borderColor: 'balck',
				pointBorderColor: 'aqua',
				fill: true,
				tension: 0
			}
			]
		}

	}
	const options = {
		plugins: {
			legend: true
		},
		scales: {
			y: {
				min: 3,
				max: 6
			}
		}
	}
	const data1 = {
		datasets: [{
			data: Object.values(piedata),
			backgroundColor: createcolours()
		}
		],
		labels: Object.keys(piedata)
	}
	const options1 = {
		plugins: {
			legend: {
				display: true,
				position: 'top',
				labels: {
					usePointStyle: true,
				}
			},
			datalabels: {
				display: true,
				color: ["#000"]
			},

		},
	}
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	  }

	// console.log(typeof bardata,"iam 432 line")


	return (
		<div>
			<main id="main" className="main" >
				<section className="section" >
					<div >
						<form>
							<div class="row">
								<div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">Start Date</label>
										<input
											type="date"
											className="form-control"
											id=""

											onChange={handleStartDate}
											value={startdate}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">End Date</label>
										<input
											type="date"
											className="form-control"
											id=""

											onChange={handleEnddate}
											value={endDate}
											required
										/>
									</div>
								</div>
								{/* <div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">Operations</label>
										<select value={operations}
											onChange={handleOperations}
											className="form-select"
											aria-label="Default select example"
										>
											<option defaultValue='select'>Select</option>
											<option value="PIE">PIE</option>
											<option value="Bar">Bar</option>
											<option value="Line">Line</option>
											<option value="Operation4">Operatin4</option>
											<option value="projectCategoryViseBillables">projectCategoryViseBillables</option>
										</select>
									</div>
								</div> */}
								<div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">Operations1</label>

										<select value={apiurl}
											className="form-select"
											onChange={getapiUrl} >
											{
												allapis.map(ele =>
													<option value={ele.apiUrl} >
														{ele.apiName}
													</option>

												)
											}

										</select>


									</div>
								</div>
								<div className="col-lg-6">
									<div className="mt-4">
										<button className="btn btn-secondary w-100 " onClick={handleSubmit}>Submit</button>
									</div>
								</div>

							</div>
						</form>
					</div>

					{/* {flag ?
						<div>
							<div className="col-lg-12">
								<div className="mb-3">
									<label className="form-label">Operations</label>
									<select
										className="form-select"
										aria-label="Default select example"
									>
										<option defaultValue='select'>Select</option>
										<option value="PIE">PIE</option>
										<option value="Bar">Bar</option>
										<option value="Line">Line</option>
										<option value="Operation4">Operatin4</option>
									</select>
								</div>
							</div>
						</div> : null
					} */}



					<div className="col-lg-6">
						<div className="col-lg-12">
							{pie1 ?

								<div style={{
									width: '500px',
									height: '300px',
									padding: '20px'
								}}>

									<Pie data={data1} options={options1} />

								</div> : null}

						</div>
						{/* <div className="col-lg-12">
							<div>
								{bar ? <Bar height={250}
									width={400}
									options={optionsbar}
									data={data}
								/> : null}
							</div>                        </div> */}
						<div className="col-lg-12">
							{bar ?
							<div>
								<Bar
									height={250}
									width={400}
									options={operations}

									data={{
										labels: bardata[0]?Object.keys(bardata[0]) :null,
										data: bardata.map(e=>bardata.length>0? Object.values(e) :null),
										datasets: bardata.map(e=>(
												{labels: Object.keys(bardata[0]),
												backgroundColor:getRandomColor(),
												
												// borderColor: "rgba(255,99,132,1)",
												borderWidth: 1,

												// hoverBackgroundColor: "rgba(255,99,132,0.4)",
												// hoverBorderColor: "rgba(255,99,132,1)",
												data: bardata.length>0? Object.values(e) :null
												}
										))


											

											

										
									}}
								/>
							</div>:null}
						</div>

					</div>


					<div>
						<div className="col-12 col-md-12 col-lg-12">
							<div style={{
								// width: '500px',
								height: '300px',
								padding: '20px'
							}}>
								{line ? <Line
									data={data}
								//   options = {options}
								></Line> : null}
								{/* </div> */}
							</div>
						</div>




					</div>

				</section>
			</main>
		</div>
	);
}
export default Dashboard;