import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LAUNCH_DETAILS_QUERY } from "../../graphql/Queries";
import "./launchdetails.css";

const LaunchDetails = () => {
    const { state } = useLocation();
    const [launchDetails, setLaunchDetails] = useState([]);
    const { data } = useQuery(GET_LAUNCH_DETAILS_QUERY, {
        variables: { id: state.id }
    });

    useEffect(() => {
        if (data) {
            setLaunchDetails(data.launch);
        }
    }, [data]);

    return (
        <div className="details-div">
            <section class="details-div-inner">
                {/* <img className="patch" src={launchDetails.links.mission_patch} alt="mission_patch" /> */}
                <h1>{launchDetails.mission_name}</h1>
                <p>{launchDetails.details}</p>
                {/* {launchDetails.links.flickr_images.map((image, key) => {
                    return (
                        <div key={key}>
                            <img className="patch" src={`${image}`} />
                        </div>
                    )
                })} */}
                    {/* <div>this is the launch details component for launch {state.id}</div> */}
                </section>
        </div>
    );
}
 
export default LaunchDetails;