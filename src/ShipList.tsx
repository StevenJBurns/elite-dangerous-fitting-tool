import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import { Ship, ShipSize } from 'types/Ship';
import ShipData from 'data/ships.json';

const ShipList = () => {
  const [shipData, setShipData] = React.useState<Ship[]>(ShipData);
  const [shipSizeFilter, setShipSizeFilter] = React.useState<ShipSize | "All">("All");

  React.useEffect(() => { 
    shipSizeFilter !== "All" ?
      setShipData(() => ShipData.filter(ship => ship.size === shipSizeFilter)) :
      setShipData(ShipData)
  }, [shipSizeFilter]);

  return (
    <>
      <Select
        defaultValue={"All"}
        value={shipSizeFilter}
        onChange={(e: React.ChangeEvent<{ value: any }>) => setShipSizeFilter(e.target.value)}
      >
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={ShipSize.Small}>Small</MenuItem>
        <MenuItem value={ShipSize.Medium}>Medium</MenuItem>
        <MenuItem value={ShipSize.Large}>Large</MenuItem>
      </Select>
      <Divider />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Manufacturer</TableCell>
            <TableCell>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { shipData.map(ship =>
            <TableRow key={ship.name}>
              <TableCell>{ship.name}</TableCell>
              <TableCell>{ship.manufacturer}</TableCell>
              <TableCell>{ship.size}</TableCell>
            </TableRow>)
          }
        </TableBody>
      </Table>
    </>
  );
};

export default ShipList;
