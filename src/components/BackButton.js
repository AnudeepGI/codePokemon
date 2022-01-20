import { useNavigate } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
         <IconButton aria-label="delete" onClick={() => navigate(`/`)}>
            <ArrowBackIcon />
        </IconButton>
        </>
    );
};

export default BackButton;