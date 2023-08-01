function AboutUs() {
  return (
    <div className="about">
      <h1 className="about-head">About Us</h1>
      <div className="about-section1">
        <img
          src={require("../Assets/IEEE ENET'Com 1.png")}
          className="logo-us"
        />
        <div className="about-text-container1">
          <p className="about-title">IEEE ENET'Com Student Branch</p>
          <p className="about-text">
            IEEE National School of Electronics and Telecommunications of Sfax
            (ENET'Com) Student Branch is a non-profit organization which was
            established on November 11th, 2013. Our Student Branch offers to its
            members numerous technical and humanitarian activities and events to
            prepare them for their professional careers.
          </p>
        </div>
      </div>
      <div className="about-section2">
        <img src={require("../Assets/ENIS 1.png")} className="logo-enis" />
        <div className="about-text-container2">
          <p className="about-title">IEEE ENIS Student Branch</p>
          <p className="about-text">
            IEEE National Engineering School Of Sfax (ENIS) Student Branch was
            established on April 1st, 2009. It offers to its members the
            opportunity to meet and learn from their fellows and the
            professionals in the field. Our activities offer numerous
            educational and technical through special projects, activities,
            meetings, tours and field trips.
          </p>
        </div>
      </div>
      <div className="about-section3">
        <img
          src={require("../Assets/WIE ENET'Com.png")}
          className="logo-wie-us"
        />
        <div className="about-text-container3">
          <p className="about-title">WIE ENET'Com Student Affinity Group</p>
          <p className="about-text">
            IEEE Women In Engineering ENET'Com Student Affinity Group was
            established on September 22nd, 2017. Our main goal is to promote
            women engineers and scientists, and inspiring girls around the world
            as well as to perform humanitarian activities.
          </p>
        </div>
      </div>
      <div className="about-section4">
        <img
          src={require("../Assets/WIE ENIS Logo.png")}
          className="logo-wie-enis"
        />
        <div className="about-text-container4">
          <p className="about-title">WIE ENIS Student Affinity Group</p>
          <p className="about-text">
            The WIE Student Affinity Group was established in ENIS on February
            24th, 2010. Our student affinity group's main goal is to perform
            humanitarian activities in order to help people in need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
