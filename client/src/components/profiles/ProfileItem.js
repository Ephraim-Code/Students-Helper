import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import  {FaUserAlt,FaCheck} from "react-icons/fa";


const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    college,
    location,
    skills
  }
}) => {
  return (
    <div className='profile bg-light' style={{ borderRadius:"10px"}}>
      <FaUserAlt className='round-img' style={{ color:"green", fontSize:"50px", margin:"20px   20px"}}/>
      <div>
        <h3 style={{color:"white", backgroundColor:"green",width:"80px", alignItems:"center"}}>{' '}{name}</h3>
        <p>
          {status} {college && <span> at {college}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary' style={{borderRadius:"10px"}}>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <FaCheck/> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
