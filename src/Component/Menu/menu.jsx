import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { places } from '../../utils/constants';
import useStyles from './MenuStyle';

const Menu = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.menu}>
        <FormControl
          className="selectbox"
          size="big"
        >
          <InputLabel>場所</InputLabel>
          <Link to="/tokyo"> tokyo</Link>
          <Select
            value=""
            style={{ colors: 'green' }}
            autoWidth
            label="場所"
          >
            {Object.keys(places)
              .map((key) => (
                <Link key={`menu_item_${key}`} to={`/${key}`}>
                  <MenuItem value={key}>
                    {places[key]}
                  </MenuItem>
                </Link>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};
export default Menu;
