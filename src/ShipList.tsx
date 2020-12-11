import ShipData from 'data/ships.json';

const ShipList = () => (
  <>
    <h2>Ship Count: {ShipData.length}</h2>
    <ul>
      { ShipData.map(ship =>
      <li>
        <span>{ship.name}</span>
        <span> &bull; </span>
        <span>{ship.size}</span>
        <span> &bull; </span>
        <span>{ship.manufacturer}</span>
      </li>) }
    </ul>
  </>
);

export default ShipList;
