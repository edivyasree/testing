import React from 'react'
import oip from '../Images/OIP.png'
import fooddonation from '../Images/fooddonationjpg.png'
import healthdonation from '../Images/healthdonation.png'
import laptop from '../Images/Laptop.png'
import footdonation from '../Images/footdonation.png'
import '../styles/Donorprofile.css'
import { Link } from 'react-router-dom'
function DonorProfilePage() {
    return (
        <div>

            <div className='row'>
                <div class="card" style={{
                    backgroundColor: "#01BFBDE6", width: "1350px",
                    height: "70px",

                    // boxShadow: "0px 3px 6px #F6F1F129",
                    // borderRadius: "0px 91px 0px 0px",
                    opacity: "1"

                }}>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" class="avatar" style={{

                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        opacity: "1"
                    }} />
                </div>
            </div>
            <div className='container'><p className='backsam'
                style={{ marginLeft: "5.8%" }}
            >Welcome back,Sam!</p></div>

            
            <div className='row'>
                <div className='col-lg-1 col-md-1 col-1'> </div>
                <div class="card" style={{
                    backgroundColor: "#01BFBDE6", width: "150px",

                    marginLeft: "-100px",
                    bottom: "38rem",
                    left: "-18px",
                    width: "106px",
                    height: "600px",


                    borderRadius: "0px 0px 95px 0px",
                    opacity: "1"
                }}>



                </div>

            </div>
<table>
    <thead>
        <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>Donor-name</th>
            <th>User-name</th>
            <th>Category</th>
            <th>Quality</th>
            <th>Contact</th>
            <th>Pickup</th>
            <th>Pincode</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

        </div>
    )
}

export default DonorProfilePage