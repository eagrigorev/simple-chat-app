import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Input } from "./input";
import { useDispatch } from "react-redux";
import { nameChange, checkboxChange } from "../store/actions/profile-actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const handleNameInput = (newName) => {
        console.log(newName);
        dispatch(nameChange(newName));
    };

    const handleCheckboxSubmit = (event) => {
        dispatch(checkboxChange(event));
    };
    return (
        <div>
            <h2>Profile</h2>
            <p>
                This page shows how users can save their information in the app
                without an actual backend using React Persist.
            </p>
            <Input onSubmit={handleNameInput} />
            <FormControlLabel
                control={
                    <Checkbox
                        onChange={(event) =>
                            handleCheckboxSubmit(event.target.checked)
                        }
                    />
                }
                label="Change the Store in React/Redux"
            />
        </div>
    );
};
