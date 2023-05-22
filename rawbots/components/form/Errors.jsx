
import Danger from "../alerts/Danger";


const Errors = ({ errors }) => {

    return (<>
        {errors?.map(function (error, index) {
            return <Danger key={index} message={error} />;
        })}
    </>);
}

export default Errors