import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import { Ship, ShipSize } from 'types/Ship';
import ShipData from 'data/ships.json';

const useStyles = makeStyles(() => ({
  table: {
    maxWidth: '800px',
    margin: '1rem auto',
  },
  tableHeader: {
    backgroundColor: 'gainsboro',
  }
}));

const ShipList = () => {
  const classes = useStyles();
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
        style={{ width: '8rem'}}
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
      <TableContainer>
        <Table className={classes.table} size="small">
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Manufacturer</TableCell>
              <TableCell>Base Cost</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Crew</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { shipData.map(ship =>
              <TableRow key={ship.name}>
                <TableCell width={'160px'}>{ship.name}</TableCell>
                <TableCell width={'120px'}>{ship.manufacturer}</TableCell>
                <TableCell width={'96px'}>{ship.baseCost}</TableCell>
                <TableCell>{ship.size}</TableCell>
                <TableCell width={'120px'}>{ship.crew}</TableCell>
              </TableRow>)
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShipList;
