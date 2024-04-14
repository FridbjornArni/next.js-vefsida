// fribbi
// ch5-7

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  
  console.log("increment like count")
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <div>
      <button onClick={handleClick}>Like({likes})</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);