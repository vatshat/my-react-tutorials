import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; Add AWS copyright!!!!!!!!!!!!!!!!!!!</p>
			<p><a href="https://www.getpostman.com/apps">Also rather use Postman</a></p>
          </div>
        </div>
      </footer>
    );
  }
}
