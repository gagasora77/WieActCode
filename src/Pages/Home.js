function Home() {
  return (
    <div className="home">
      <div className="home-logo-container">
        <img src={require("../Assets/WIE ACT 3.png")} className="home-logo" />
      </div>
      <h1 className="head-title" id="hi">
        Hotel Orient Palace Sousse
      </h1>
      <h1 className="head-title">1 & 2 October</h1>
      <a
        href="https://docs.google.com/forms/d/1NjX7i_cIchPKjakWvIofev-NXeUpwVoymiTz_53l1LM/viewform?chromeless=1&edit_requested=true#responses"
        className="button1"
      >
        Register Now
      </a>
      <div className="home-text-container-father">
        <div className="home-text-container">
          <p className="home-text">
            The IEEE WIE Annual Congress of Tunisia in its first edition is an
            occasion to honor the achievements of all the successful and leading
            women in the STEM field.
          </p>
        </div>
      </div>
      <h1 className="home-head1">Event Theme</h1>
      <img src={require("../Assets/Theme.png")} className="home-theme" />
      <h1 className="home-head2">Competition</h1>
      <div className="home-competition-section">
        <img
          src={require("../Assets/Medicine.png")}
          className="home-medicine"
        />
        <div className="home-competition-text-container">
          <p className="home-title">Theme : AI in Healthcare</p>
          <p className="home-competition-text">
            This competition is an opportunity for all Artificial intelligence
            enthusiasts to unleash their creativity and show us their true
            innovation. It is open to all people from different engineering
            field, so do not miss it.
          </p>
        </div>
        <a href="/Program#hello" className="button2">
          More Details
        </a>
      </div>
    </div>
  );
}

export default Home;
