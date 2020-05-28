import React from "react";
import axios from "axios";
import { connect } from "react-redux";

const UserReservations = (userId) => {
    const [toolArray, setToolArray] = React.useState([]);

  React.useEffect(() => {
    const userdata = {
      userId,
    };

    axios
      .post("http://localhost:3000/getReservations", { userdata })
      .then((response) => {
        console.log(response);
        setToolArray(response.data);
      });
  }, []);

  return (
    <div>
      <ol>
        {toolArray.map((t) => (
          <div className="round-border-tooldiv">
            <div>
              <b>{t.tool_name}</b>
              <div className="flex-wrapper-row">
                <div className="width-350px">
                  <span>Make:</span> <span>{t.make}</span>
                </div>
                <div className="width-350px">
                  <span>Contact Name:</span> <span>{t.contact_name}</span>
                </div>
              </div>
              <div className="flex-wrapper-row">
                <div className="width-350px">
                  <span>Model:</span> <span>{t.model_name}</span>
                </div>
                <div className="width-350px">
                  <span>Email:</span> <span> {t.email} </span>
                </div>
              </div>
              <div className="flex-wrapper-row">
                <div className="width-350px">
                  <span>Price:</span> <span>{t.price}</span>
                  <i> $/hour</i>
                </div>
                <div className="width-350px">
                  <span>Number:</span> <span>{t.contact_number}</span>
                </div>
              </div>
              <div className="bottom-border">
                <i>
                  <span>Suggested Project: </span>
                  <span>{t.suggested_project}</span>
                </i>
              </div>
              <div className="flex-wrapper-row">
                <div className="width-350px">
                  <span>Reserved from</span> <span>{t.start_date}</span>
                </div>
                <div className="width-350px">
                  <span>Until</span> <span>{t.end_date}</span>
                </div>
              </div>
            </div>
            <div>
              <img src={t.image_url} className="imageframe" />
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.userReducer.userId,
});

export default connect(mapStateToProps)(UserReservations);
