import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_LAUNCHES_QUERY } from "../../graphql/Queries";
import "./launchlist.css";

const LaunchList = () => {
    const [launchData, setLaunchData] = useState([]); 
    const [limit, setLimit] = useState(10);
    const {loading, data, error} = useQuery(GET_LAUNCHES_QUERY, {
        variables: {limit: limit},
    });
    const limitValues = [10, 20, 50, 100, 200];

    useEffect(() => {
        if (data) {
            setLaunchData(data.launchesPast);
        }
    }, [data]);

    return ( 
        <div>
            <h1 className="title">SpaceX Launches</h1>
            <form className="dropdown">
                <label>Limit:</label>
                <select name="limit" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}>
                    {limitValues.map((limit, key) => {
                        return (
                            <option value={limit} key={key}>{limit}</option>
                        )
                    })}
                </select>
            </form>
            <div id="launch-list-container" className="row">
                {launchData.map((launch, key) => {
                return(
                    <div id="launch-container" key={key} className="col-lg-4">
                        <Link
                            to={{
                                pathname: `/${launch.id}`,
                                state: {
                                    id: launch.id
                                }
                            }}
                            style={{ textDecoration: 'none' }}
                        >
                            <div>
                                <img className="patch" src={launch.links.mission_patch_small} alt="mission_patch" />
                                    <h3 id="mission-name">{launch.mission_name}</h3>
                                {/* <p>{launch.launch_date_utc}</p> */}
                                {/* <p>{launch.rocket.rocket_name}</p> */}
                                <img className="launch-thumbnail" src={launch.links.flickr_images[0]} alt="mission img" />
                                {/* <Route exact path="/:id" component={() => <LaunchDetails id={launch.id} details={launchDetails}/>}/> */}
                            </div>
                        </Link>
                    </div>
                )
                })}
            </div>
        </div> 
    );
}
 
export default LaunchList;