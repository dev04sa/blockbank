// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Legend,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import "./profile.scss";

// const Profile = (props) => {
//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   // Fetch user data from localStorage on component mount
//   useEffect(() => {
//     const savedUserData = JSON.parse(localStorage.getItem("userData"));
//     if (savedUserData) {
//       setUserData(savedUserData);
//     }
//   }, []);

//   const handleKYCClick = () => {
//     // Redirect to the KYC form page
//     navigate("/kyc");
//   };

//   if (!userData) {
//     return (
//       <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Profile</h2>
//         <p className="text-gray-500 text-center">No user data found. Please complete the KYC process.</p>
//         <div className="text-center mt-6">
//           <button
//             onClick={handleKYCClick}
//             className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200"
//           >
//             Complete KYC
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="single">
//       <div className="view">
//          {/* User Details Section */}
//       <div className="mt-4 space-y-4   px-10 ">
//         <h3 className="font-medium text-gray-700">User Details:</h3>
//         <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
//           <p><strong>Name:</strong></p>
//           <p>{userData.name}</p>
//         </div>
//         <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
//           <p><strong>Mobile:</strong></p>
//           <p>{userData.mobile}</p>
//         </div>
//         <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
//           <p><strong>Address:</strong></p>
//           <p>{userData.address}</p>
//         </div>
//         <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
//           <p><strong>Credit Score:</strong></p>
//           <p>{userData.creditScore || "720"}</p>
//         </div>
//         <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
//           <p><strong>PAN Card:</strong></p>
//           <p>{userData.panCard || "222d22222222222e"}</p>
//         </div>
//         <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
//           <p><strong>Status:</strong></p>
//           <p className="text-green-600 font-bold">Verified</p>
//         </div>
//       </div>
//         {/* <div className="info">
//           <div className="topInfo">
//             {userData.img && <img src={userData.img} alt="" />}
//             <h1>{userData.title}</h1>
//           </div>
//           <div className="details">
//             {userData.info && Object.entries(userData.info).map((item) => (
//               <div className="item" key={item[0]}>
//                 <span className="itemTitle">{item[0]}</span>
//                 <span className="itemValue">{item[1]}</span>
//               </div>
//             ))}
//           </div>
//         </div> */}
//         <hr />
//         {props.chart && (
//           <div className="chart">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 width={500}
//                 height={300}
//                 data={props.chart.data}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 {props.chart.dataKeys.map((dataKey) => (
//                   <Line
//                     key={dataKey.name}
//                     type="monotone"
//                     dataKey={dataKey.name}
//                     stroke={dataKey.color}
//                   />
//                 ))}
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         )}
//       </div>

//       <div className="activities">
//         <h2>Latest Activities</h2>
//         {props.activities && (
//           <ul>
//             {props.activities.map((activity) => (
//               <li key={activity.text}>
//                 <div>
//                   <p>{activity.text}</p>
//                   <time>{activity.time}</time>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./profile.scss";
import Navbar from "../navbar";

const Profile = (props) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) {
      setUserData(savedUserData);
    }
  }, []);

  const handleKYCClick = () => {
    // Redirect to the KYC form page
    navigate("/kyc");
  };

  if (!userData) {
    return (
      <>
        <Navbar />
        <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Profile
          </h2>
          <p className="text-gray-500 text-center">
            No user data found. Please complete the KYC process.
          </p>
          <div className="text-center mt-6">
            <button
              onClick={handleKYCClick}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              Complete KYC
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="single gap-16 py-40 ">
        <div className="view">
          {/* User Details Section */}
          <div className="mt-4 space-y-4 px-10">
            <h3 className="text-4xl font-bold text-center py-2 text-gray-700">
              User Details:
            </h3>

            {/* User Image Section */}
            <div className="flex justify-center mb-4">
              <img
                src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                alt="User"
                className="w-32 h-32 rounded-full border-2 border-gray-300"
              />
            </div>

            <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
              <p>
                <strong>Name:</strong>
              </p>
              <p>{userData.name}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
              <p>
                <strong>Mobile:</strong>
              </p>
              <p>{userData.mobile}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
              <p>
                <strong>Address:</strong>
              </p>
              <p>{userData.address}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
              <p>
                <strong>Credit Score:</strong>
              </p>
              <p>{userData.creditScore || "720"}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
              <p>
                <strong>PAN Card:</strong>
              </p>
              <p>{userData.panCard || "222d22222222222e"}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2 hover:bg-gray-50 transition-colors duration-200">
              <p>
                <strong>Status:</strong>
              </p>
              <p className="text-green-600 font-bold">Verified</p>
            </div>
          </div>

          <hr />
          {props.chart && (
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={props.chart.data}
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
                  <Legend />
                  {props.chart.dataKeys.map((dataKey) => (
                    <Line
                      key={dataKey.name}
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className="activities">
          <h2 className="text-4xl font-bold ">Latest Activities</h2>
          {props.activities && (
            <ul>
              {props.activities.map((activity) => (
                <li key={activity.text}>
                  <div>
                    <p>{activity.text}</p>
                    <time>{activity.time}</time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
