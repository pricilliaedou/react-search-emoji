import happy from "./assets/happy.jpg";

const Header = () => (
  <div className='header'>
    <img src={happy} alt='emoji happy' />
    <h1>Emoji Search</h1>
    <img src={happy} alt='emoji happy' />
  </div>
);

export default Header;
