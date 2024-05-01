const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-72">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="footer-widget">
            <h3 className="text-2xl font-extrabold mb-4">CONTACT US</h3>
            <ul className="footer-address">
              <li className="flex items-center mb-4">
                <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                <div>
                  <h4 className="font-extrabold text-lg">Address</h4>
                  <p>3186 Paulington Road <br />Sakubva <br /> Mutare <br /> Zimbabwe</p>
                </div>
              </li>
              <li className="flex items-center mb-4">
                <i className="fa fa-phone mr-2" aria-hidden="true"></i>
                <div>
                  <h4 className="font-extrabold text-lg">Phone</h4>
                  <p><a href="tel:+0123456789">+0123456789</a></p>
                </div>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                <div>

                  <h4 className="font-extrabold text-lg">Email Address</h4>
                  <p><a href="mailto:stjosephshosp@gmail.com">stjosephshosp@gmail.com</a></p>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-widget">
            <h3 className="text-2xl font-extrabold mb-4">SERVICES</h3>
            <ul className="footer-menu">
              <li><a href="#">Neurology</a></li>
              <li><a href="#">Eyes care</a></li>
              <li><a href="#">Pulmonary</a></li>
              <li><a href="#">Cardiology</a></li>
              <li><a href="#">Dental Care</a></li>
              <li><a href="#">Hepatology</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p>&copy; 2024 St Joseph's Mission Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;