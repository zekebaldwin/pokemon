const Pokemon = (props) => {
  let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div>
      <ul>
        <img src={image} />
        <li>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.type}</li>
      </ul>
    </div>
  );
};
export default Pokemon;
