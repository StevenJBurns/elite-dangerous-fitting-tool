import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import { Ship, ShipSize } from 'types/Ship';
import ShipData from 'data/ships.json';

const ShipList = () => {
  const [shipData, setShipData] = React.useState<Array<Ship>>(ShipData);
  const [shipSizeFilter, setShipSizeFilter] = React.useState<ShipSize | "A">("A");

  React.useEffect(() => { 
    shipSizeFilter !== "A" ?
      setShipData(() => ShipData.filter(ship => ship.size === shipSizeFilter)) :
      setShipData(ShipData)
  }, [shipSizeFilter]);

  return (
    <>
      <Select
        defaultValue={"A"}
        value={shipSizeFilter}
        onChange={(e: React.ChangeEvent<{ value: any }>) => setShipSizeFilter(e.target.value)}
      >
        <MenuItem value={"A"}>All</MenuItem>
        <MenuItem value={"S"}>Small</MenuItem>
        <MenuItem value={"M"}>Medium</MenuItem>
        <MenuItem value={"L"}>Large</MenuItem>
      </Select>
      <hr />
      <h2>Ship Count: {shipData.length}</h2>
      <hr />
      <ul>
        { shipData.map(ship =>
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
};

export default ShipList;
