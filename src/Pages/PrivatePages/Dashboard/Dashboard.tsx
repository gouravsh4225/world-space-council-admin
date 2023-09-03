// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const getDummyTotalExpenseData = () => {
//   return [
//     {
//       name: "Mon",
//       value: 13,
//     },
//     {
//       name: "Tues",
//       value: 26,
//     },
//     {
//       name: "Wed",
//       value: 20,
//     },
//     {
//       name: "Thurs",
//       value: 93,
//     },
//     {
//       name: "Fri",
//       value: 61,
//     },
//     {
//       name: "Sat",
//       value: 140,
//     },
//     {
//       name: "Sun",
//       value: 85,
//     },
//   ];
// };

// const projectInvestmentData = [
//   { name: "Jan", projectBudget: 7635, expense: 5435 },
//   { name: "Feb", projectBudget: 5465, expense: 3452 },
//   { name: "Mar", projectBudget: 6754, expense: 5432 },
//   { name: "Apr", projectBudget: 5432, expense: 3452 },
//   { name: "May", projectBudget: 5435, expense: 2564 },
//   { name: "Jun", projectBudget: 6545, expense: 3456 },
//   { name: "Jul", projectBudget: 4453, expense: 3123 },
//   { name: "Aug", projectBudget: 3425, expense: 2435 },
//   { name: "Sep", projectBudget: 7654, expense: 5463 },
//   { name: "Oct", projectBudget: 3245, expense: 1245 },
//   { name: "Nov", projectBudget: 4532, expense: 3245 },
//   { name: "Dec", projectBudget: 5643, expense: 4534 },
// ];

// const getDummyPieChartData = () => {
//   return [
//     { name: "Completed", value: 68, color: "2dce89" },
//     { name: "Running", value: 55, color: "#4454c3" },
//     { name: "Pending", value: 45, color: "#f72d66" },
//   ];
// };

const Dashboard = () => {
  // const [totalExpenseData, setTotalExpeneseData] = useState(
  //   getDummyTotalExpenseData()
  // );

  // const renderProjectExpenseTooltip = ({ active, payload }:any) => {
  //   if (active && payload && payload.length) {
  //     if (payload[0].payload) {
  //       const { name, value } = payload[0].payload;
  //       return (
  //         <div className="custom-tooltip">
  //           <p className="label">{`${name} : ${value}`}</p>
  //         </div>
  //       );
  //     }
  //   }
  //   return null;
  // };

  return (
    <div>
      <div className="row">
        <div className="col-xl-4 col-md-12">
          <div className="card expenses-card overflow-hidden">
            <div className="card-body">
              <div className="feature">
                <i className="fa fa-university feature-icon"></i>
                <h1 className="font-weight-bold mb-0 mt-4">$12,345.00</h1>
                <p className="text-muted fs-18 mb-0">Expenses This Month</p>
              </div>
            </div>
            <div className="chart-wrapper">
              {/* <ResponsiveContainer width="100%" height={185}>
                <LineChart
                  data={totalExpenseData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <Tooltip content={renderProjectExpenseTooltip} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer> */}
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-sm d-flex mb-4 mb-sm-0">
                  <i className="mdi mdi-basket-fill fs-60 text-success icon-dropshadow-success me-3"></i>
                  <div className="mt-5">
                    <h6>Total Orders</h6>
                    <h3 className="mb-0 font-weight-bold">2245</h3>
                  </div>
                </div>
                <div className="col-12 col-sm d-flex mb-4 mb-sm-0">
                  <i className="mdi mdi-basket-fill fs-60 text-primary icon-dropshadow-primary me-3"></i>
                  <div className="mt-5">
                    <h6>Recent Order</h6>
                    <h3 className="mb-0 font-weight-bold">45%</h3>
                  </div>
                </div>
                <div className="col-12 col-sm d-flex">
                  <i className="mdi mdi-basket-fill fs-60 text-danger icon-dropshadow-danger me-3"></i>
                  <div className="mt-5">
                    <h6>Cancel Orders</h6>
                    <h3 className="mb-0 font-weight-bold">56%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <p className="mb-1">Total Invoices</p>
                  <h2 className="mb-1 font-weight-bold">245</h2>
                  <span className="mb-1 text-muted">
                    <span className="text-danger">
                      <i className="fa fa-caret-down  me-1"></i> 43.2
                    </span>{" "}
                    last month
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <p className="mb-1">Credited Amount</p>
                  <h2 className="mb-1 font-weight-bold">$53k</h2>
                  <span className="mb-1 text-muted">
                    <span className="text-success">
                      <i className="fa fa-caret-up  me-1"></i> 19.8
                    </span>{" "}
                    last month
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <p className="mb-1">Pending Amount</p>
                  <h2 className="mb-1 font-weight-bold">$2345</h2>
                  <span className="mb-1 text-muted">
                    <span className="text-success">
                      <i className="fa fa-caret-up  me-1"></i> 0.8%
                    </span>{" "}
                    last month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-deck">
        <div className="col-xl-4 col-md-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project Status</h3>
              <div className="d-flex ms-auto">
                <div className="btn-group mb-0">
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This week
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#!">
                      Next Week
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#!">
                      {" "}
                      Last Month
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="latest-timeline latest-timeline1">
                <ul className="timeline mb-0">
                  <li className="mt-0 media media-lg">
                    <span className="latest-timeline1-icon bg-primary shadow3">
                      10
                    </span>
                    <div className="media mt-0">
                      <div className="media-body">
                        <h6 className="mb-1">
                          <a href="#!" className="font-weight-semibold fs-17">
                            Angular Project
                          </a>
                          <span className="badge bg-success ms-2">
                            Completed
                          </span>
                        </h6>
                        <p className="mt-1 fs-13 mb-1">
                          <b>Client:</b> Hoyt Righter
                        </p>
                        <span className="text-muted fs-12 d-block">
                          12.00 am
                        </span>{" "}
                        <a
                          className="text-primary fs-12 font-weight-bold"
                          href="#!"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="mt-0 media media-lg">
                    <div className="media mt-0">
                      <span className="latest-timeline1-icon bg-secondary shadow3">
                        11
                      </span>
                      <div className="media-body">
                        <h6 className="mb-1">
                          <a href="#!" className="font-weight-semibold fs-17">
                            Html Project
                          </a>
                          <span className="badge bg-secondary ms-2">Hold</span>
                        </h6>
                        <p className="mt-1 fs-13 mb-1">
                          <b>Client:</b> Riva Digangi
                        </p>
                        <span className="text-muted fs-12 d-block">
                          11.00 am
                        </span>{" "}
                        <a
                          className="text-primary fs-12 font-weight-bold"
                          href="#!"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="mt-0 media media-lg">
                    <div className="media mt-0">
                      <span className="latest-timeline1-icon bg-success shadow3">
                        12
                      </span>
                      <div className="media-body">
                        <h6 className="mb-1">
                          <a href="#!" className="font-weight-semibold fs-17">
                            Php Project
                          </a>
                          <span className="badge bg-primary ms-2">Running</span>
                        </h6>
                        <p className="mt-1 fs-13 mb-1">
                          <b>Client:</b> Craig Dollard{" "}
                        </p>
                        <span className="text-muted fs-12 d-block">
                          10.00am
                        </span>{" "}
                        <a
                          className="text-primary fs-12 font-weight-bold"
                          href="#!"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-12 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project Investment</h3>
              <div className="d-flex ms-auto">
                <div className="btn-group mb-0">
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Year
                  </button>
                  <div className="dropdown-menu p-0">
                    {" "}
                    <a className="dropdown-item" href="#!">
                      last Year
                    </a>{" "}
                    <a className="dropdown-item" href="#!">
                      2018
                    </a>{" "}
                    <a className="dropdown-item" href="#!">
                      2017
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={800}
                  height={300}
                  data={projectInvestmentData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="projectBudget"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#82ca9d"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer> */}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-12">
          <div className="card overflow-hidden">
            <div className="card-header">
              <h3 className="card-title">Project Statistics</h3>
            </div>
            <div className="card-body mx-auto text-center pb-0">
              <div className="chart-container2">
                {/* <ResponsiveContainer width={220} height={200}>
                  <PieChart width={200} height={200}>
                    <Pie
                      dataKey="value"
                      data={getDummyPieChartData()}
                      outerRadius={100}
                    >
                      {getDummyPieChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer> */}
              </div>
            </div>
            <div className="card-body pt-0 border-top-0">
              <div className="row mt-4 no-gutters">
                <div className="col">
                  <div className="text-muted mb-1 fs-13 d-flex">
                    <div className="w-3 h-3 bg-primary me-2 mt-1 brround"></div>
                    Running
                  </div>
                </div>
                <div className="col">
                  <div className="text-muted mb-1 fs-13 d-flex">
                    <div className="w-3 h-3 bg-secondary me-2 mt-1 brround"></div>
                    Pending
                  </div>
                </div>
                <div className="col">
                  <div className="text-muted mb-1 fs-13 d-flex">
                    <div className="w-3 h-3 bg-success me-2 mt-1 brround"></div>
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Complete Invoices</h3>
              <div className="card-options ">
                <div className="btn-group mb-0">
                  <a
                    className="option-dots"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#!"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#!">
                      {" "}
                      Download Print
                    </a>{" "}
                    <a className="dropdown-item" href="#!">
                      Last Week
                    </a>{" "}
                    <a className="dropdown-item" href="#!">
                      Last Month
                    </a>{" "}
                    <a className="dropdown-item" href="#!">
                      Yearly
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#!">
                      <i className="fa fa-cog me-2"></i> Settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="">
                <div className="table-responsive invoice-table-responsive">
                  <table className="table card-table table-vcenter text-nowrap mb-0 border">
                    <thead>
                      <tr>
                        <th className="wd-lg-10p">Client</th>
                        <th className="wd-lg-20p">Date</th>
                        <th className="wd-lg-20p">Invoice</th>
                        <th className="wd-lg-20p">Amount</th>
                        <th className="wd-lg-20p">Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-semibold">Hoyt Righter</td>
                        <td className="text-nowrap">Jan 13, 2020</td>
                        <td>INV-1432</td>
                        <td>$34,980</td>
                        <td>
                          <span className="badge bg-success rounded-pill">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div className="btn-group mb-0">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu">
                              {" "}
                              <a className="dropdown-item" href="#!">
                                Copy
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Send Email
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Before Due
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Print Invoice
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Download Print
                              </a>{" "}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-semibold">Melvina Harn</td>
                        <td className="text-nowrap">Feb 12, 2020</td>
                        <td>INV-5467</td>
                        <td>$35,768</td>
                        <td>
                          <span className="badge bg-success rounded-pill">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div className="btn-group mb-0">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu">
                              {" "}
                              <a className="dropdown-item" href="#!">
                                Copy
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Send Email
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Before Due
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Print Invoice
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Download Print
                              </a>{" "}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-semibold">Riva Digangi</td>
                        <td className="text-nowrap">Mar 23, 2020</td>
                        <td>INV-6543</td>
                        <td>$13,456</td>
                        <td>
                          <span className="badge bg-success rounded-pill">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div className="btn-group mb-0">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu">
                              {" "}
                              <a className="dropdown-item" href="#!">
                                Copy
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Send Email
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Before Due
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Print Invoice
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Download Print
                              </a>{" "}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-semibold">Craig Dollard</td>
                        <td className="text-nowrap">Apr 11, 2020</td>
                        <td>INV-3245</td>
                        <td>$25,678</td>
                        <td>
                          <span className="badge bg-danger rounded-pill">
                            Due
                          </span>
                        </td>
                        <td>
                          <div className="btn-group mb-0">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu">
                              {" "}
                              <a className="dropdown-item" href="#!">
                                Copy
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Send Email
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Before Due
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Print Invoice
                              </a>{" "}
                              <a className="dropdown-item" href="#!">
                                Download Print
                              </a>{" "}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project Payment Status</h3>
            </div>
            <div className="card-body p-5">
              <div className="d-flex align-items-end justify-content-between mg-b-5">
                <h6 className="">Angular Project</h6>
                <h6 className="font-weight-bold mb-1">50%</h6>
              </div>
              <div className="progress progress-sm mb-5">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="d-flex align-items-end justify-content-between mg-b-5">
                <h6 className="">Php Project</h6>
                <h6 className="font-weight-bold mb-1">60%</h6>
              </div>
              <div className="progress progress-sm mb-5">
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className="d-flex align-items-end justify-content-between mg-b-5">
                <h6 className="">Ecommerce Project</h6>
                <h6 className="font-weight-bold mb-1">40%</h6>
              </div>
              <div className="progress progress-sm mb-5">
                <div
                  className="progress-bar bg-info"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <div className="d-flex align-items-end justify-content-between mg-b-5">
                <h6 className="">Html Project</h6>
                <h6 className="font-weight-bold mb-1">100%</h6>
              </div>
              <div className="progress progress-sm mb-5">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="d-flex align-items-end justify-content-between mg-b-5">
                <h6 className="">Java Project</h6>
                <h6 className="font-weight-bold mb-1">50%</h6>
              </div>
              <div className="progress progress-sm mb-5">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="d-flex align-items-end justify-content-between mg-b-5">
                <h6 className="">Wordpress Project</h6>
                <h6 className="font-weight-bold mb-1">90%</h6>
              </div>
              <div className="progress progress-sm mb-0">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-12 col-lg-12">
          <div className="card overflow-hidden">
            <div className="card-header">
              <h3 className="card-title">Project Review Activity</h3>
            </div>
            <div className="p-4 scrollbar h-330 ps ps--active-y" id="scrollbar">
              <div className="activity">
                <img
                  src="css/14.jpg"
                  alt=""
                  className="img-activity shadow3 border-primary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      Adam Berry{" "}
                      <span className="text-muted">Add a new projects </span>{" "}
                      AngularJS Template
                    </p>
                    <small className="text-muted ">30 mins ago</small>
                  </div>
                </div>
                <img
                  src="css/10.jpg"
                  alt=""
                  className="img-activity shadow3 border-secondary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      Irene Hunter{" "}
                      <span className="text-muted"> Add a new projects </span>
                      Free HTML Template
                    </p>
                    <small className="text-muted ">1 days ago</small>
                  </div>
                </div>
                <img
                  src="css/4.jpg"
                  alt=""
                  className="img-activity shadow3 border-success"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      John Payne
                      <span className="text-muted"> Add a new projects </span>
                      Free PSD Template
                    </p>
                    <small className="text-muted ">3 days ago</small>
                  </div>
                </div>
                <img
                  src="css/8.jpg"
                  alt=""
                  className="img-activity shadow3 border-danger"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      Julia Hardacre
                      <span className="text-muted"> Add a new projects </span>
                      Free UI Template
                    </p>
                    <small className="text-muted ">5 days ago</small>
                  </div>
                </div>
                <img
                  src="css/14.jpg"
                  alt=""
                  className="img-activity shadow3 border-primary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      Adam Berry{" "}
                      <span className="text-muted">Add a new projects </span>{" "}
                      AngularJS Template
                    </p>
                    <small className="text-muted ">30 mins ago</small>
                  </div>
                </div>
                <img
                  src="css/10.jpg"
                  alt=""
                  className="img-activity shadow3 border-secondary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      Irene Hunter{" "}
                      <span className="text-muted"> Add a new projects </span>
                      Free HTML Template
                    </p>
                    <small className="text-muted ">1 days ago</small>
                  </div>
                </div>
                <img
                  src="css/4.jpg"
                  alt=""
                  className="img-activity shadow3 border-success"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      John Payne
                      <span className="text-muted"> Add a new projects </span>
                      Free PSD Template
                    </p>
                    <small className="text-muted ">3 days ago</small>
                  </div>
                </div>
                <img
                  src="css/8.jpg"
                  alt=""
                  className="img-activity shadow3 border-danger"
                />
                <div className="time-activity mb-0">
                  <div className="item-activity mb-0">
                    <p className="mb-0 font-weight-bold">
                      Julia Hardacre
                      <span className="text-muted"> Add a new projects </span>
                      Free UI Template
                    </p>
                    <small className="text-muted ">5 days ago</small>
                  </div>
                </div>
              </div>
              <div className="ps__rail-x" style={{ left: "0", bottom: "0px" }}>
                <div
                  className="ps__thumb-x"
                  tabIndex={0}
                  style={{ width: "0", left: "0" }}
                ></div>
              </div>
              <div
                className="ps__rail-y"
                style={{ top: "0", height: "330px", right: "0" }}
              >
                <div
                  className="ps__thumb-y"
                  tabIndex={0}
                  style={{ top: "0", height: "151px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-12 col-lg-12">
          <div className="card overflow-hidden">
            <div className="card-header">
              <h3 className="card-title">Email Notification</h3>
            </div>
            <div
              className="p-4 scrollbar2 h-330 ps ps--active-y"
              id="scrollbar2"
            >
              <div className="activity">
                <img
                  src="css/4.jpg"
                  alt=""
                  className="img-activity shadow3 border-primary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      New Project{" "}
                      <span className="text-muted">Issue Fixed</span>
                    </p>
                    <small className="text-muted ">30 mins ago</small>
                  </div>
                </div>
                <img
                  src="css/2.jpg"
                  alt=""
                  className="img-activity shadow3 border-secondary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      Wordpress Project
                      <span className="text-muted">New theme updated </span>
                    </p>
                    <small className="text-muted ">1 days ago</small>
                  </div>
                </div>
                <img
                  src="css/1.jpg"
                  alt=""
                  className="img-activity shadow3 border-success"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      E-Commerce
                      <span className="text-muted">
                        Plugin Issue Fixed and Updated
                      </span>
                    </p>
                    <small className="text-muted ">3 days ago</small>
                  </div>
                </div>
                <img
                  src="css/3.jpg"
                  alt=""
                  className="img-activity shadow3 border-danger"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      New Theme
                      <span className="text-muted"> Updated in Site</span>
                    </p>
                    <small className="text-muted ">5 days ago</small>
                  </div>
                </div>
                <img
                  src="css/4.jpg"
                  alt=""
                  className="img-activity shadow3 border-primary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      New Project{" "}
                      <span className="text-muted">Issue Fixed</span>
                    </p>
                    <small className="text-muted ">30 mins ago</small>
                  </div>
                </div>
                <img
                  src="css/2.jpg"
                  alt=""
                  className="img-activity shadow3 border-secondary"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      Wordpress Project
                      <span className="text-muted">New theme updated </span>
                    </p>
                    <small className="text-muted ">1 days ago</small>
                  </div>
                </div>
                <img
                  src="css/1.jpg"
                  alt=""
                  className="img-activity shadow3 border-success"
                />
                <div className="time-activity">
                  <div className="item-activity">
                    <p className="mb-0 font-weight-bold">
                      E-Commerce
                      <span className="text-muted">
                        Plugin Issue Fixed and Updated
                      </span>
                    </p>
                    <small className="text-muted ">3 days ago</small>
                  </div>
                </div>
              </div>
              <div className="ps__rail-x" style={{ left: "0", bottom: "0" }}>
                <div
                  className="ps__thumb-x"
                  tabIndex={0}
                  style={{ left: "0", width: "0" }}
                ></div>
              </div>
              <div
                className="ps__rail-y"
                style={{ top: "0", height: "330px", right: "0" }}
              >
                <div
                  className="ps__thumb-y"
                  tabIndex={0}
                  style={{ top: "0", height: "183px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
