function About() {
  return (
    <div className="container">
      <div className="description">
        <p>
          <b>ShareNotes</b> - service for exchanging notes. Create a note, send
          a link to the note and your friend can view it. After viewing, the
          note will be deleted (or after 15 minutes from the moment of creation)
        </p>
        <p>How to create a note?</p>
        <ul>
          <li>Follow to Create Note</li>
          <li>Insert text and click Create Note</li>
          <li>Send the generated link to your friend!</li>
        </ul>
        <p>
          How do I read a note? Follow the URL you recieve, or type URL in
          search form
        </p>
      </div>
    </div>
  );
}

export default About;
