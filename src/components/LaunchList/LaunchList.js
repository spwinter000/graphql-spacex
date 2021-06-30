import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_LAUNCHES_QUERY } from "../../graphql/Queries";
import "./launchlist.css";

const LaunchList = () => {
    const [launchData, setLaunchData] = useState([]); 
    const [limit, setLimit] = useState(10);
    const {loading, data, error} = useQuery(GET_LAUNCHES_QUERY, {
        variables: {limit: limit},
    });
    const limitValues = [10,20,50,100];

    useEffect(() => {
        if (data) {
            setLaunchData(data.launchesPast);
        }
    }, [data]);

    return ( 
        <div>
            <h1>Launch Data</h1>
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
            <div className="row" id="launch-list-container">
                {launchData.map((launch, key) => {
                return(
                    <div className="col" id="launch-container" key={key}>
                        <div>
                            <h2>{launch.mission_name}</h2>
                            <p>{launch.launch_date_utc}</p>
                            <img className="patch" src={launch.links.mission_patch_small} alt="mission_patch"/>
                        </div>
                    </div>
                )
                })}
            </div>
        </div> 
    );
}
 
export default LaunchList;