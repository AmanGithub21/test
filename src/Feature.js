import "./Feature.css";

function Feature() {
  return (
    <div className="Feature">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5">
          <div className="box">
            <h1 className="mb-3">Make an unforgotable first impression.</h1>
            <h5 className="mb-4">
              DATA is smart, elegant and <br /> digital business card.
            </h5>
            <ul className="mb-4">
              <li>- Share your all the info with simple tap</li>
              <li>- Increase your engagement</li>
              <li>- Generate more Leads</li>
              <li>- Save time and money</li>
            </ul>
            <div className="login-button">
              <button className="btn btn-outline-light mb-2 mt-2" type="submit">
                Choose your design
              </button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <img
            height="90%"
            src="data:image/jpeg;base64,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"
            alt="phone image"
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
