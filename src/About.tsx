import "./About.css"

export default function About() {
  return (
    <div className="about">
      <div className="info">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptas reprehenderit illo dolorem doloribus voluptate consequatur
          ducimus reiciendis dicta, veritatis quae? Unde maxime error, vitae
          tenetur officiis cumque non corporis.
        </p>
      </div>
      <div className="profile">
        <img src="/Profile.jpg" alt="Profile" />
      </div>
    </div>
  );
}
