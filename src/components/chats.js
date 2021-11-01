import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ChatList } from "./chat-list";
import { ChatWindow } from "./chat-window";
import { theme } from "./theme";
export const Chats = (props) => {
    return (
        <div className="chats">
            <div>
                <h2>Latest Messages</h2>
                <div className="chats__wrap">
                    <ChatWindow />
                </div>
                <div className="form">
                    <TextField
                        required
                        className="outlined-required"
                        label="Name"
                        defaultValue=""
                        placeholder="John Doe"
                        variant="outlined"
                        autoFocus
                        name="name"
                        onChange={props.handleMsgNameChange}
                    />
                    <TextField
                        required
                        className="outlined-required"
                        label="Message"
                        defaultValue=""
                        placeholder="Hello, world!"
                        variant="outlined"
                        name="body"
                        onChange={props.handleMsgBodyChange}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        onClick={props.updateMessageWithThunk}
                        style={{
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {" "}
                        Send
                    </Button>
                </div>
            </div>
            <div>
                <h2>Chats</h2>
                <div className="chats__list">
                    <ChatList secondary={props.secondary} />
                </div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={props.secondary}
                            onChange={(event) =>
                                props.setSecondary(event.target.checked)
                            }
                        />
                    }
                    label="Toggle participants"
                />
            </div>
        </div>
    );
};
