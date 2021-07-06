import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_LAUNCHES_QUERY } from "../../graphql/Queries";
import "./launchlist.css";
// import LaunchDetails from "../LaunchDetails/LaunchDetails";
// import LaunchDetails from './../LaunchDetails/LaunchDetails';

const LaunchList = () => {
    const [launchData, setLaunchData] = useState([]); 
    const [limit, setLimit] = useState(10);
    const {loading, data, error} = useQuery(GET_LAUNCHES_QUERY, {
        variables: {limit: limit},
    });
    const limitValues = [10, 20, 50, 100];

    useEffect(() => {
        if (data) {
            setLaunchData(data.launchesPast);
        }
    }, [data]);

    return ( 
        <div>
            <h1>SpaceX Launches</h1>
            <label>Limit:</label>
            <form>
                <select name="limit" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}>
                    {limitValues.map((limit, key) => {
                        return (
                            <option value={limit} key={key}>{limit}</option>
                        )
                    })}
                </select>
            </form>
            <div id="launch-list-container">
                {launchData.map((launch, key) => {
                return(
                    <div id="launch-container" key={key}>
                        <div>
                            <Link
                                to={{
                                    pathname: `/${launch.id}`,
                                    state: {
                                        id: launch.id
                                    }
                                }}
                            >
                                <h2>{launch.mission_name}</h2>
                            </Link>
                            <p>{launch.launch_date_utc}</p>
                            <p>{launch.rocket.rocket_name}</p>
                            <img className="patch" src={launch.links.mission_patch_small} alt="mission_patch" />
                            {/* <Route exact path="/:id" component={() => <LaunchDetails id={launch.id} details={launchDetails}/>}/> */}
                        </div>
                    </div>
                )
                })}
            </div>
        </div> 
    );
}
 
export default LaunchList;